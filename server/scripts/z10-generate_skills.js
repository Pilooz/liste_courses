'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const skill = [{
      'label': 'Couper',
    }, {
      'label': 'Emincer',
    }, {
      'label': 'Eplucher',
    }, {
      'label': 'Frire',
    }, {
      'label': 'Rissoler',
    }, {
      'label': 'Chauffer',
    }, {
      'label': 'Remuer',
    }, {
      'label': 'Battre',
    }, {
      'label': 'Verser',
    }, {
      'label': 'Badigeonner',
    }, {
      'label': 'Bouillir',
    }, {
      'label': 'Ciseler',
    }, {
      'label': 'Décortiquer',
    }, {
      'label': 'Désosser',
    }, {
      'label': 'Diluer',
    }, {
      'label': 'Dresser',
    }, {
      'label': 'Ecailler',
    }, {
      'label': 'Effiler',
    }, {
      'label': 'Egoutter',
    }, {
      'label': 'Emulsionner',
    }, {
      'label': 'Essuyer',
    }, {
      'label': 'Etaler',
    }, {
      'label': 'Fouetter',
    }, {
      'label': 'Mélanger',
    }, {
      'label': 'Mixer',
    }, {
      'label': 'Râper',
    }, {
      'label': 'Rincer',
    }, {
      'label': 'Vider',
    }, {
      'label': 'Rôtir',
    }, {
      'label': 'Presser',
    }, {
      'label': 'Piquer',
    }, {
      'label': 'Peser',
    }];

    return entityUtils.createInOrder(app.models.skill, skill);
  },
};
