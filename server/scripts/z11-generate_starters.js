'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const starters = [
      {name: 'Salade de tomates'},
      {name: 'Tomates et concombres'},
      {name: 'Radis roses'},
      {name: 'Radis noirs'},
      {name: 'Carottes rapées'},
      {name: 'Asperges'},
      {name: 'Coeurs d\'artichauds'},
      {name: 'Charcuterie'},
      {name: 'Betteraves rouges en dés'},
      {name: 'Betteraves rouges en salade'},
      {name: 'Choux blanc en salade'},
      {name: 'Coeurs de palmiers'},
      {name: 'Avocats'},
      {name: 'Cake au saumon'},
      {name: 'Tomates cerise'},
      {name: 'Lasagnes aux épinards et chèvre'},
    ];

    return entityUtils.createInOrder(app.models.starter, starters);
  },
};
