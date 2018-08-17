'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const starters = [{
      name: 'Concombre mimosa',
      recipeId: 1,
    }, {
      name: 'Bruschettas tomates-Basilic',
      recipeId: 2,
    }, {
      name: 'Bettraves mimosa',
      recipeId: 3,
    }, {
      name: 'Carpaccio de courgettes au parmesan',
      recipeId: 4,
    }, {
      name: 'Carottes rappées',
      recipeId: 5,
    }, {
      name: 'Potage de légumes',
      recipeId: 6,
    }, {
      name: 'Artichaut vinaigrette',
      recipeId: 7,
    }, {
      name: 'Caviar d\'aubergines',
      recipeId: 8,
    }, {
      name: 'Rillettes de thon au basilic',
      recipeId: 9,
    }, {
      name: 'Salade de courgettes à la feta',
      recipeId: 10,
    }, {
      name: 'Oeufs cocotte',
      recipeId: 11,
    }, {
      name: 'Salade Melon Jambon',
      recipeId: 12,
    }, {
      name: 'Salade de pommes de terre',
      recipeId: 13,
    }, {
      name: 'Coleslow',
      recipeId: 14,
    }, {
      name: 'Flan aux carottes',
      recipeId: 15,
    }, {
      name: 'Salade de coeur de palmier au surimi',
      recipeId: 16,
    }, {
      name: 'Salade au maïs et champignons de paris en vinaigrette',
      recipeId: 17,
    }, {
      name: 'Salade de courgettes croquantes au maïs',
      recipeId: 18,
    }, {
      name: 'Soufflé au fromage',
      recipeId: 19,
    }, {
      name: 'saumon à la mousse de courgettes',
      recipeId: 20,
    }];

    return entityUtils.createInOrder(app.models.starter, starters);
  },
};
