'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const elderlySkills = [{
      'elderlyId': 1,
      'skillId': 1,
    }, {
      'elderlyId': 1,
      'skillId': 2,
    }, {
      'elderlyId': 1,
      'skillId': 3,
    }, {
      'elderlyId': 1,
      'skillId': 4,
    }, {
      'elderlyId': 1,
      'skillId': 5,
    }, {
      'elderlyId': 2,
      'skillId': 12,
    }, {
      'elderlyId': 2,
      'skillId': 13,
    }, {
      'elderlyId': 2,
      'skillId': 14,
    }, {
      'elderlyId': 2,
      'skillId': 15,
    }];

    return entityUtils.createInOrder(app.models.elderlySkill, elderlySkills);
  },
};
