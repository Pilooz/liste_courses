'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const elderly = [{
      'firstname': 'Joseph',
      'lastname': 'Dupont',
      'birthdate': '1931-08-12',
      'address': '1 cours Emile Zola',
      'postalCode': '69100',
      'city': 'Villeurbanne',
      'phone': '0478676545',
      'mobile': '0778676545',
      'maritalStatus': 'Veuf',
      'homeStatus': 'Vit seul en appartement',
      'weight': 82,
      'size': 170,
    }, {
      'firstname': 'Michelle',
      'lastname': 'Durand',
      'birthdate': '1927-02-26',
      'address': '12 rue des Allouettes',
      'postalCode': '69008',
      'city': 'Lyon',
      'phone': '0405060708',
      'mobile': '0605060708',
      'maritalStatus': 'Divorcée',
      'homeStatus': 'Habite avec sa soeur alitée',
      'weight': 78,
      'size': 167,
    }];

    return entityUtils.createInOrder(app.models.elderly, elderly);
  },
};
