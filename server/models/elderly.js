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
  Elderly.initMeals = async function(elderlyId, endDate) {
    // Retrieve elderly's meals for the given period
    const meals = await getMeals(elderlyId, endDate);
    // Do not compute anything if all meals are already linked to a starter and a dish
    if (meals.every(meal => meal.starterId && meal.dishId)) {
      return;
    }
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

  function getMeals(elderlyId, endDate) {
    return Elderly.app.models.meal.find({where: {
      elderlyId: elderlyId,
      and: [{date: {gte: new Date()}}, {date: {lte: endDate}}],
    }});
  }

  Elderly.remoteMethod('initMeals', {
    description: '[Custom] Init all meels for the given period',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'endDate', type: 'date', required: true},
    ],
    http: {path: '/:id/meals/init', verb: 'post'},
  });
};
