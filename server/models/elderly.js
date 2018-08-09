'use strict';

const _ = require('lodash');

module.exports = function(Elderly) {
  /**
   * Init meals in from today to endDate, by attributing some starters and dishes to each meal
   *
   * @param {number} elderlyId
   * @param {Date} startDate
   * @param {Date} endDate
   */
  Elderly.initMeals = async function(elderlyId, startDate, endDate) {
    // Retrieve elderly's meals for the given period

    const meals = await getEmptyMeals(elderlyId, startDate, endDate);
    // Get all starters & dishes, and shuffle the lists (random)
    let starters = await Elderly.app.models.starter.find();
    starters = _.shuffle(starters);
    let dishes = await Elderly.app.models.dish.find();
    dishes = _.shuffle(dishes);
    // Attribute each starter and dish to meals
    for (let i = 0; i < meals.length; i++) {
      await meals[i].starter(starters[i % starters.length]);
      await meals[i].dish(dishes[i % dishes.length]);
      await meals[i].save();
    }
  };

  function getEmptyMeals(elderlyId, startDate, endDate) {
    return Elderly.app.models.meal.find({where: {
      elderlyId: elderlyId,
      date: {gte: startDate},
      date: {lte: endDate},
      starterId: null,
      dishId: null,
    }});
  }

  Elderly.remoteMethod('initMeals', {
    description: '[Custom] Init all meels for the given period',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'startDate', type: 'date', required: true},
      {arg: 'endDate', type: 'date', required: true},
    ],
    http: {path: '/:id/meals/init', verb: 'post'},
  });
};
