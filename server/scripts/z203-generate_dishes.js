'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const dishes = [{
      name: 'Blanquette de veau à l\'ancienne',
      recipeId: 21,
    }, {
      name: 'Flan de poisson au coulis de tomate',
      recipeId: 22,
    }, {
      name: 'Crème de brocolis béchamel',
      recipeId: 23,
    }, {
      name: 'Soupe de lentilles au lard',
      recipeId: 24,
    }, {
      name: 'Gratin de pâtes aux épinards et à la tomate',
      recipeId: 25,
    }, {
      name: 'Filets de merlan aux poireaux',
      recipeId: 26,
    }, {
      name: 'Lapin à la normande',
      recipeId: 27,
    }, {
      name: 'Papillote de cabillaud',
      recipeId: 28,
    }, {
      name: 'Gratin de potiron',
      recipeId: 29,
    }, {
      name: 'Roulé de volaille au jambon cru',
      recipeId: 30,
    }, {
      name: 'Boulettes d\'agneau sauce Yaourt au Cumin',
      recipeId: 31,
    }, {
      name: 'Omellette aux poivrons',
      recipeId: 32,
    }, {
      name: 'Hachis Parmentier',
      recipeId: 33,
    }, {
      name: 'Purée de patates douces et châtaignes',
      recipeId: 34,
    }, {
      name: 'Galettes de Polenta',
      recipeId: 35,
    }, {
      name: 'Gratin de cœurs d’artichauts au bleu',
      recipeId: 36,
    }, {
      name: 'Clafoutis tomates cerises et fromage de chèvre',
      recipeId: 37,
    }, {
      name: 'Oeufs chipolatas et sauce tomates',
      recipeId: 38,
    }, {
      name: 'Tomates farcies au chèvre chaud',
      recipeId: 39,
    }, {
      name: 'Poivron jaune farci à l\'aubergine',
      recipeId: 40,
    }, {
      name: 'Gratin de courgettes',
      recipeId: 41,
    }, {
      name: 'Gratin de poisson',
      recipeId: 42,
    }, {
      name: 'Risotto aux poireaux',
      recipeId: 43,
    }, {
      name: 'Chili con carne',
      recipeId: 44,
    }];

    return entityUtils.createInOrder(app.models.dish, dishes);
  },
};
