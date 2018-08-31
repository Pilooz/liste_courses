'use strict';

const jsonUtils = require('../util/JsonUtils');
const httpUtils = require('../util/HttpUtils');

async function sendShoppingList(shoppingList) {
  // TODO : Set raspberrypi api rest URL
  const HOST = 'localhost';
  const PORT = '3000';
  const PATH = '/api/elderlies';

  return JSON.parse(await httpUtils.sendRequest(HOST, PORT, PATH, 'POST', null, JSON.stringify(shoppingList), false));
}

module.exports = function(Shoppinglist) {
  /**
    * Print shopping list
    *
    * @param {number} shoppingListId
    */
  Shoppinglist.print = async function(shoppingListId, res) {
    var shoppingList = await Shoppinglist.app.models.shoppingList.findById(shoppingListId);

    if (!shoppingList) {
      res.status(404).send('Unknown \"shoppingList\" id \"' + shoppingListId + '\".');
      return null;
    }

    shoppingList = jsonUtils.toJsonIfExists(shoppingList);
    return await sendShoppingList(shoppingList);
  };

  Shoppinglist.remoteMethod('print', {
    description: '[Custom] Print shopping list',
    accepts: [
      {arg: 'id', type: 'number'},
      {arg: 'res', type: 'object', http: {source: 'res'}},
    ],
    returns: {arg: 'result', type: 'object', root: true},
    http: {path: '/:id/print', verb: 'post'},
  });
};
