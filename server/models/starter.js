'use strict';

const _ = require('lodash');
const jsonUtils = require('../util/JsonUtils');

module.exports = function(Starter) {
  /**
    * Disable original remote method
    */
  Starter.disableRemoteMethodByName('findById');

  /**
    * Get a starter with its ingredients and quantities
    *
    * @param {number} starterId
    */
  Starter.getStarterWithIngredients = async function(starterId) {
    // Get starter with ingredients
    var starter = await getStarterIncludeIngredients(starterId);
    starter = jsonUtils.toJsonIfExists(starter);

    // Attribute its quantity to each ingredient
    for (let i = 0; i < starter.ingredients.length; i++) {
      var starterIngredient = await Starter.app.models.starterIngredients.findOne({
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

    return starter;
  };

  function getStarterIncludeIngredients(starterId) {
    return Starter.app.models.starter.findOne({
      where: {id: starterId},
      include: {relation: 'ingredients'},
    });
  }

  Starter.remoteMethod('getStarterWithIngredients', {
    description: '[Custom] Get starter with all ingredients and quantities',
    accepts: [
      {arg: 'id', type: 'number'},
    ],
    returns: {arg: 'starter', type: 'starter', root: true},
    http: {path: '/:id', verb: 'get'},
  });
};
