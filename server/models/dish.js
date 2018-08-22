'use strict';

const _ = require('lodash');
const jsonUtils = require('../util/JsonUtils');

module.exports = function(Dish) {
  /**
    * Disable original remote method
    */
  Dish.disableRemoteMethodByName('findById');

  /**
    * Get a dish with its ingredients and quantities
    *
    * @param {number} dishId
    */
  Dish.getDishWithIngredients = async function(dishId) {
    // Get dish with ingredients
    var dish = await getDishIncludeIngredients(dishId);
    dish = jsonUtils.toJsonIfExists(dish);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < dish.ingredients.length; i++) {
      var dishIngredient = await Dish.app.models.dishIngredients.findOne({
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

    return dish;
  };

  function getDishIncludeIngredients(dishId) {
    return Dish.app.models.dish.findOne({
      where: {id: dishId},
      include: {relation: 'ingredients'},
    });
  }

  Dish.remoteMethod('getDishWithIngredients', {
    description: '[Custom] Get dish with all ingredients and quantities',
    accepts: [
      {arg: 'id', type: 'number'},
    ],
    returns: {arg: 'dish', type: 'dish', root: true},
    http: {path: '/:id', verb: 'get'},
  });
};
