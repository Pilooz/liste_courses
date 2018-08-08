'use strict';

const entityUtils = require('../util/EntityUtils');
const mealType = require('../enums/MealType');

module.exports = {
  generate: function(app) {
    const elderlyMeals = [{
      'elderlyId': 1,
      'date': '2018-08-06T00:00:00.000',
      'type': mealType.LUNCH,
    }, {
      'elderlyId': 1,
      'date': '2018-08-06T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-07T00:00:00.000',
      'type': mealType.LUNCH,
    }, {
      'elderlyId': 1,
      'date': '2018-08-07T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-08T00:00:00.000',
      'type': mealType.LUNCH,
    }, {
      'elderlyId': 1,
      'date': '2018-08-08T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-09T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-10T00:00:00.000',
      'type': mealType.LUNCH,
    }, {
      'elderlyId': 1,
      'date': '2018-08-10T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-11T00:00:00.000',
      'type': mealType.LUNCH,
    }, {
      'elderlyId': 1,
      'date': '2018-08-12T00:00:00.000',
      'type': mealType.DINNER,
    }, {
      'elderlyId': 1,
      'date': '2018-08-13T00:00:00.000',
      'type': mealType.LUNCH,
    }];

    return entityUtils.createInOrder(app.models.meal, elderlyMeals);
  },
};
