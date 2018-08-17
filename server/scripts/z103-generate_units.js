'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const units = [{
      'name': 'grammes',
      'shortName': 'g',
    }, {
      'name': 'kilogrammes',
      'shortName': 'kg',
    }, {
      'name': 'cuillères à soupe',
      'shortName': 'càs',
    }, {
      'name': 'cuillères à café',
      'shortName': 'càc',
    }, {
      'name': 'pincées',
      'shortName': 'pincées',
    }, {
      'name': 'litres',
      'shortName': 'l',
    }, {
      'name': 'centilitres',
      'shortName': 'cl',
    }, {
      'name': 'décilitres',
      'shortName': 'dl',
    }, {
      'name': 'filet',
      'shortName': 'filet',
    }, {
      'name': 'gousses',
      'shortName': 'gousses',
    }, {
      'name': 'gouttes',
      'shortName': 'gouttes',
    }, {
      'name': 'feuilles',
      'shortName': 'feuilles',
    }, {
      'name': 'tranches',
      'shortName': 'tranches',
    }, {
      'name': 'portion',
      'shortName': 'portion',
    }, {
      'name': 'bouquet',
      'shortName': 'bouquet',
    }, {
      'name': 'branches',
      'shortName': 'branches',
    }, {
      'name': 'noisettes',
      'shortName': 'noisettes',
    }, {
      'name': 'bâton',
      'shortName': 'bâton',
    }];

    return entityUtils.createInOrder(app.models.unit, units);
  },
};
