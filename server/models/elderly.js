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
    // Retrieve elderly's meals for the given period
    const meals = await getEmptyMeals(elderlyId, startDate, endDate);
    // Get all starters & dishes, and shuffle the lists (random)
    let starters = await Elderly.app.models.starter.find();
    starters = _.shuffle(starters);
    let dishes = await Elderly.app.models.dish.find();
    dishes = _.shuffle(dishes);
    // Attribute each starter and dish to meals
    for (let i = 0; i < meals.length; i++) {
      await meals[i].starter(starters[i % starters.length]);
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
      var ingredients = await getRecipeWithIngredientsquantity(meals[i].starter.recipeId);
      ingredientsList = addToShoppingList(ingredientsList, ingredients);

      ingredients = await getRecipeWithIngredientsquantity(meals[i].dish.recipeId);
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

  async function getRecipeWithIngredientsquantity(recipeId) {
    var recipe = await Elderly.app.models.recipe.findOne({
      where: {id: recipeId},
      include: {relation: 'ingredients'},
    });
    recipe = jsonUtils.toJsonIfExists(recipe);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < recipe.ingredients.length; i++) {
      var recipeIngredient = await Elderly.app.models.recipeIngredients.findOne({
        where: {
          and: [{
            recipeId: recipeId,
          }, {
            ingredientId: recipe.ingredients[i].id,
          }],
        },
      });

      Object.assign(recipe.ingredients[i], _.pick(recipeIngredient, ['quantity']));
    }

    return recipe.ingredients;
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
    returns: {arg: 'ingredients', type: '[ingredients]', root: true},
    http: {path: '/:id/shoppingLists/:date', verb: 'get'},
  });
};
