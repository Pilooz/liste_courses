'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const User = app.models.User;

    const user = [{
      'password': 'Gestion',
      'email': 'jeanne.martin@lc.com',
      'emailVerified': true,
    }, {
      'password': 'Gestion',
      'email': 'jacques.dupont@lc.com',
      'emailVerified': true,
    }, {
      'password': 'Gestion',
      'email': 'paula.dubois@lc.com',
      'emailVerified': true,
    }];

    return entityUtils.createInOrder(User, user);
  },
};
