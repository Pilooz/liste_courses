'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const dishes = [{
      name: 'Côte de boeuf et haricots verts',
    }, {
      name: 'Escalope de poulet et courgettes',
    }, {
      name: 'Tomates farcies et riz',
    }, {
      name: 'Couscous',
    }, {
      name: 'Omelette au jambon',
    }, {
      name: 'Steak & frites',
    }, {
      name: 'Filet de saumon et haricots beurre',
    }, {
      name: 'Filet de truite aux amandes et patates',
    }, {
      name: 'Dos de cabillaud sur lit de poireau',
    }, {
      name: 'Escalope de dinde et poivrons',
    }, {
      name: 'Ratatouille et riz',
    }, {
      name: 'Penne aux champignons et noix',
    }, {
      name: 'Lasagne de potiron et tomates cerise',
    }, {
      name: 'Salade de haricots blancs et légumes grillés',
    }, {
      name: 'Paella au quinoa',
    }, {
      name: 'Salade grecque au tofu',
    }];

    return entityUtils.createInOrder(app.models.dish, dishes);
  },
};
