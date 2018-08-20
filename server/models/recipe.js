'use strict';

const _ = require('lodash');
const jsonUtils = require('../util/JsonUtils');

module.exports = function(Recipe) {
  /**
   * Disable original remote method
   */
  Recipe.disableRemoteMethodByName('prototype.__get__ingredients');

  /**
   * Get a recipe with its ingredients and quantities
   *
   * @param {number} recipeId
   */
  Recipe.getRecipeWithIngredients = async function(recipeId) {
    // Get recipe with ingredients
    var recipe = await getRecipeIncludeIngredients(recipeId);
    recipe = jsonUtils.toJsonIfExists(recipe);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < recipe.ingredients.length; i++) {
      var recipeIngredient = await Recipe.app.models.recipeIngredients.findOne({
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
  };

  function getRecipeIncludeIngredients(recipeId) {
    return Recipe.app.models.recipe.findOne({
      where: {id: recipeId},
      include: {relation: 'ingredients'},
    });
  }

  Recipe.remoteMethod('getRecipeWithIngredients', {
    description: '[Custom] Get recipe with all ingredients and quantities',
    accepts: [
      {arg: 'id', type: 'number'},
    ],
    returns: {arg: 'ingredients', type: '[ingredients]', root: true},
    http: {path: '/:id/ingredients', verb: 'get'},
  });
};
