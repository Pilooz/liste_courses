'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const user = [{
      'username': 'BVCS1',
      'password': '6L6G7Q',
      'email': 'unknown1@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS2',
      'password': '794JKY',
      'email': 'unknown2@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS3',
      'password': 'B659UQ',
      'email': 'unknown3@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS4',
      'password': '57NY9F',
      'email': 'unknown4@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS5',
      'password': '8L7ER4',
      'email': 'unknown5@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS6',
      'password': 'J2L5R5',
      'email': 'unknown6@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS7',
      'password': 'S3ZR87',
      'email': 'unknown7@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS8',
      'password': '8E5LT4',
      'email': 'unknown8@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS9',
      'password': 'LV878M',
      'email': 'unknown9@unknow.com',
      'emailVerified': true,
    }, {
      'username': 'BVCS10',
      'password': '4M5LV4',
      'email': 'unknown10@unknow.com',
      'emailVerified': true,
    }];

    return entityUtils.createInOrder(app.models.User, user);
  },
};
