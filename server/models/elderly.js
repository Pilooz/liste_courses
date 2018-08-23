'use strict';

const _ = require('lodash');
const jsonUtils = require('../util/JsonUtils');

module.exports = function(Elderly) {
  /**
   * Init meals in from today to endDate, by attributing some starters and dishes to each meal
   *
   * @param {number} elderlyId
   * @param {Date} startDate
   * @param {Date} endDate
   */
  Elderly.initMeals = async function(elderlyId, startDate, endDate) {
    let plannedMeals = await getMeals(elderlyId, startDate, endDate);
    plannedMeals = jsonUtils.toJsonIfExists(plannedMeals);
    const plannedStarters = _.map(plannedMeals, (meal) => { return meal.starter.id; });
    const plannedDishes = _.map(plannedMeals, (meal) => { return meal.dish.id; });
    // Get all starters but planned, and shuffle the lists (random)
    let availableStarters = await Elderly.app.models.starter.find({
      where: {
        id: {nin: plannedStarters},
      },
    });
    availableStarters = _.shuffle(availableStarters);

    // Get all dishes but planned, and shuffle the lists (random)
    let dishes = await Elderly.app.models.dish.find({
      where: {
        id: {nin: plannedDishes},
      },
    });
    dishes = _.shuffle(dishes);

    // Retrieve elderly's empty meals for the given period
    const meals = await getEmptyMeals(elderlyId, startDate, endDate);
    // Attribute each starter and dish to meals
    for (let i = 0; i < meals.length; i++) {
      await meals[i].starter(availableStarters[i % availableStarters.length]);
      await meals[i].dish(dishes[i % dishes.length]);
      await meals[i].save();
    }
  };

  function getEmptyMeals(elderlyId, startDate, endDate) {
    return Elderly.app.models.meal.find({where: {
      and: [{
        elderlyId: elderlyId,
      }, {
        date: {gte: startDate},
      }, {
        date: {lte: endDate},
      }, {
        starterId: null,
      }, {
        dishId: null,
      }],
    }});
  }

  Elderly.remoteMethod('initMeals', {
    description: '[Custom] Init all meels for the given period',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'startDate', type: 'date', required: true},
      {arg: 'endDate', type: 'date', required: true},
    ],
    http: {path: '/:id/meals/init', verb: 'post'},
  });

  /**
   * Init meals in from today to endDate, by attributing some starters and dishes to each meal
   *
   * @param {number} elderlyId
   * @param {Date} startDate
   * @param {Date} endDate
   */
  Elderly.initShoppingList = async function(elderlyId, startDate, endDate) {
    var ingredientsList = [];
    var shoppingList = await getShoppingList(elderlyId, startDate, endDate);

    if (!shoppingList) {
      shoppingList = {
        elderlyId: elderlyId,
        startDate: startDate,
        endDate: endDate,
      };
    }

    // Retrieve elderly's meals for the given period
    var meals = await getMeals(elderlyId, startDate, endDate);
    meals = jsonUtils.toJsonIfExists(meals);

    for (let i = 0; i < meals.length; i++) {
      var ingredients = await getStarterWithIngredientsquantity(meals[i].starter.id);
      ingredientsList = addToShoppingList(ingredientsList, ingredients);

      ingredients = await getDishWithIngredientsquantity(meals[i].dish.id);
      ingredientsList = addToShoppingList(ingredientsList, ingredients);
    }

    if (!shoppingList.id) {
      shoppingList.id = (await Elderly.app.models.shoppingList.create(shoppingList)).id;
    } else {
      await Elderly.app.models.shoppingListIngredients.destroyAll({shoppingListId: shoppingList.id});
    }
    await Elderly.app.models.shoppingListIngredients.create(_.map(ingredientsList, (ingredient) => {
      return {
        shoppingListId: shoppingList.id,
        ingredientId: ingredient.id,
        quantity: ingredient.quantity,
      };
    }));
  };

  function getShoppingList(elderlyId, startDate, endDate) {
    return Elderly.app.models.shoppingList.findOne({
      where: {
        and: [{
          elderlyId: elderlyId,
        }, {
          startDate: startDate,
        }, {
          endDate: endDate,
        }],
      },
    });
  }

  function getMeals(elderlyId, startDate, endDate) {
    return Elderly.app.models.meal.find({
      where: {
        and: [{
          elderlyId: elderlyId,
        }, {
          date: {gte: startDate},
        }, {
          date: {lte: endDate},
        }, {
          starterId: {neq: null},
        }, {
          dishId: {neq: null},
        }],
      },
      include: ['starter', 'dish'],
    });
  }

  async function getStarterWithIngredientsquantity(starterId) {
    var starter = await Elderly.app.models.starter.findOne({
      where: {id: starterId},
      include: {relation: 'ingredients'},
    });
    starter = jsonUtils.toJsonIfExists(starter);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < starter.ingredients.length; i++) {
      var starterIngredient = await Elderly.app.models.starterIngredients.findOne({
        where: {
          and: [{
            starterId: starterId,
          }, {
            ingredientId: starter.ingredients[i].id,
          }],
        },
      });

      Object.assign(starter.ingredients[i], _.pick(starterIngredient, ['quantity']));
    }

    return starter.ingredients;
  }

  async function getDishWithIngredientsquantity(dishId) {
    var dish = await Elderly.app.models.dish.findOne({
      where: {id: dishId},
      include: {relation: 'ingredients'},
    });
    dish = jsonUtils.toJsonIfExists(dish);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < dish.ingredients.length; i++) {
      var dishIngredient = await Elderly.app.models.dishIngredients.findOne({
        where: {
          and: [{
            dishId: dishId,
          }, {
            ingredientId: dish.ingredients[i].id,
          }],
        },
      });

      Object.assign(dish.ingredients[i], _.pick(dishIngredient, ['quantity']));
    }

    return dish.ingredients;
  }

  /**
   * Add or push an item to the shopping list wether it exists
   * @param ingredients
   */
  function addToShoppingList(ingredientsList, ingredients) {
    _.each(ingredients, ingredient => {
      var item = _.find(ingredientsList, {id: ingredient.id});

      if (item) {
        item.quantity += ingredient.quantity;
      } else {
        ingredientsList.push(ingredient);
      }
    });

    return ingredientsList;
  }

  Elderly.remoteMethod('initShoppingList', {
    description: '[Custom] Init shopping list for the given period',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'startDate', type: 'date', required: true},
      {arg: 'endDate', type: 'date', required: true},
    ],
    http: {path: '/:id/shoppingLists/init', verb: 'post'},
  });

  /**
   * Get a shopping list with its ingredients and quantities
   *
   * @param {number} elderlyId
   */
  Elderly.getShoppinglistWithIngredients = async function(elderlyId, date) {
    // Get shopping list with ingredients
    var shoppingList = await getShoppingListIncludeIngredients(elderlyId, date);
    shoppingList = jsonUtils.toJsonIfExists(shoppingList);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < shoppingList.ingredients.length; i++) {
      var shoppingListIngredient = await Elderly.app.models.shoppingListIngredients.findOne({
        where: {
          and: [{
            shoppingListId: shoppingList.id,
          }, {
            ingredientId: shoppingList.ingredients[i].id,
          }],
        },
      });

      Object.assign(shoppingList.ingredients[i], _.pick(shoppingListIngredient, ['quantity']));
    }

    return shoppingList;
  };

  function getShoppingListIncludeIngredients(elderlyId, date) {
    return Elderly.app.models.shoppingList.findOne({
      where: {
        and: [{
          elderlyId: elderlyId,
        }, {
          startDate: {lte: date},
        }, {
          endDate: {gte: date},
        }],
      },
      include: {relation: 'ingredients'},
    });
  }

  Elderly.remoteMethod('getShoppinglistWithIngredients', {
    description: '[Custom] Get shopping list with all ingredients and quantities',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'date', type: 'date', required: true},
    ],
    returns: {arg: 'ingredients', type: '[ingredient]', root: true},
    http: {path: '/:id/shoppingLists/date/:date', verb: 'get'},
  });

  /**
   * Replace a starter of a meal
   *
   * @param {number} elderlyId
   * @param {number} mealId
   * @param {Date} startDate
   * @param {Date} endDate
   */
  Elderly.replaceStarter = async function(elderlyId, mealId, startDate, endDate) {
    let plannedMeals = await getMeals(elderlyId, startDate, endDate);
    plannedMeals = jsonUtils.toJsonIfExists(plannedMeals);
    const plannedStarters = _.map(plannedMeals, (meal) => { return meal.starter.id; });
    // Get all starters but planned, and shuffle the lists (random)
    let availableStarters = await Elderly.app.models.starter.find({
      where: {
        id: {nin: plannedStarters},
      },
    });
    availableStarters = _.shuffle(availableStarters);

    let meal = await Elderly.app.models.meal.findById(mealId);
    meal.starterId = availableStarters[0].id;
    meal.save();

    return availableStarters[0];
  };

  Elderly.remoteMethod('replaceStarter', {
    description: '[Custom] replace starter of the given meal',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'fk', type: 'number'},
      {arg: 'startDate', type: 'date', required: true},
      {arg: 'endDate', type: 'date', required: true},
    ],
    returns: {arg: 'starter', type: 'starter', root: true},
    http: {path: '/:id/meals/:fk/replaceStarter', verb: 'post'},
  });

  /**
   * Replace a dish of a meal
   *
   * @param {number} elderlyId
   * @param {number} mealId
   * @param {Date} startDate
   * @param {Date} endDate
   */
  Elderly.replaceDish = async function(elderlyId, mealId, startDate, endDate) {
    let plannedMeals = await getMeals(elderlyId, startDate, endDate);
    plannedMeals = jsonUtils.toJsonIfExists(plannedMeals);
    const plannedDishes = _.map(plannedMeals, (meal) => { return meal.dish.id; });
    // Get all dishes but planned, and shuffle the lists (random)
    let availableDishes = await Elderly.app.models.dish.find({
      where: {
        id: {nin: plannedDishes},
      },
    });
    availableDishes = _.shuffle(availableDishes);

    let meal = await Elderly.app.models.meal.findById(mealId);
    meal.dishId = availableDishes[0].id;
    meal.save();

    return availableDishes[0];
  };

  Elderly.remoteMethod('replaceDish', {
    description: '[Custom] replace dish of the given meal',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'fk', type: 'number'},
      {arg: 'startDate', type: 'date', required: true},
      {arg: 'endDate', type: 'date', required: true},
    ],
    returns: {arg: 'dish', type: 'dish', root: true},
    http: {path: '/:id/meals/:fk/replaceDish', verb: 'post'},
  });

  /**
   * Patch an ingredient quantity of a shopping list
   *
   * @param {number} elderlyId
   * @param {number} shoppingListId
   * @param {number} ingredientId
   * @param {number} quantity
   */
  Elderly.patchIngredientQuantity = async function(elderlyId, shoppingListId, ingredientId, quantity, res) {
    let shoppingListIngredient = await Elderly.app.models.shoppingListIngredients.find({
      where: {
        shoppingListId: shoppingListId,
        ingredientId: ingredientId,
      },
    });

    if (shoppingListIngredient.length === 1) {
      shoppingListIngredient[0].quantity = quantity;
      shoppingListIngredient[0].save();

      return shoppingListIngredient[0];
    } else {
      res.status(500).send('Aucun (ou plusieurs) ingrédient(s) trouvé(s)');
    }
  };

  Elderly.remoteMethod('patchIngredientQuantity', {
    description: '[Custom] Patch shopping list ingredient attributes',
    accepts: [
      {arg: 'id', type: 'number', required: true},
      {arg: 'fk', type: 'number', required: true},
      {arg: 'ingredientId', type: 'number', required: true},
      {arg: 'quantity', type: 'number', required: true},
      {arg: 'res', type: 'object', http: {source: 'res'}},
    ],
    returns: {arg: 'shoppingListIngredients', type: 'shoppingListIngredients', root: true},
    http: {path: '/:id/shoppingLists/:fk/ingredients/:ingredientId', verb: 'patch'},
  });

  /**
   * Delete an ingredient from a shopping list
   *
   * @param {number} elderlyId
   * @param {number} shoppingListId
   * @param {number} ingredientId
   */
  Elderly.deleteShoppingListIngredient = async function(elderlyId, shoppingListId, ingredientId, res) {
    let shoppingListIngredient = await Elderly.app.models.shoppingListIngredients.find({
      where: {
        shoppingListId: shoppingListId,
        ingredientId: ingredientId,
      },
    });

    if (shoppingListIngredient.length === 1) {
      await Elderly.app.models.shoppingListIngredients.destroyById(shoppingListIngredient[0].id);

      return shoppingListIngredient[0];
    } else {
      res.status(500).send('Aucun (ou plusieurs) ingrédient(s) trouvé(s)');
    }
  };

  Elderly.remoteMethod('deleteShoppingListIngredient', {
    description: '[Custom] Patch shopping list ingredient attributes',
    accepts: [
      {arg: 'id', type: 'number', required: true},
      {arg: 'fk', type: 'number', required: true},
      {arg: 'ingredientId', type: 'number', required: true},
      {arg: 'res', type: 'object', http: {source: 'res'}},
    ],
    returns: {arg: 'shoppingListIngredients', type: 'shoppingListIngredients', root: true},
    http: {path: '/:id/shoppingLists/:fk/ingredients/:ingredientId', verb: 'delete'},
  });
};
