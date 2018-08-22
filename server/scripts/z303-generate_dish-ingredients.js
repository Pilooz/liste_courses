'use strict';

const _ = require('lodash');
const entityUtils = require('../util/EntityUtils');

function getId(list, searchObject) {
  const item = _.find(list, searchObject);

  if (item && item.id) {
    return item.id;
  }

  throw new Error('L\'objet ' + (searchObject.name ? searchObject.name : searchObject.shortName) + ' n\'a pas été trouvé dans la liste');
}

module.exports = {
  generate: async function(app) {
    const ingredients = await app.models.ingredient.find();

    const ingredientsLists = [{
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Veau à blanquette'}),
      quantity: 250,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 2,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 3,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: 1,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: 5,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.5,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 1,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Filets de poisson blanc'}),
      quantity: 100,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: 10,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 0.5,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 25,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Noix de muscade'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: 4,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Clou de girofle'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 2,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 3,
      ingredientId: getId(ingredients, {name: 'Brocolis'}),
      quantity: 150,
    }, {
      dishId: 3,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 13,
    }, {
      dishId: 3,
      ingredientId: getId(ingredients, {name: 'Fleur de maïs (Maïzena)'}),
      quantity: 5,
    }, {
      dishId: 3,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 10,
    }, {
      dishId: 3,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Eau'}),
      quantity: 40,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Lentilles'}),
      quantity: 60,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 2,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Lardons'}),
      quantity: 25,
    }, {
      dishId: 4,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: 1,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Pâtes'}),
      quantity: 75,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Epinards'}),
      quantity: 125,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 1,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 25,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: 12,
    }, {
      dishId: 5,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Filets de merlan'}),
      quantity: 1,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: 2,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 1,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 2,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 10,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: 1.5,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 6,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Râble de lapin'}),
      quantity: 1,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Pommes golden'}),
      quantity: 1,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Cidre brut'}),
      quantity: 4,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Crème liquide'}),
      quantity: 1,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 2,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 7,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Filets de poisson blanc'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 8,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Tranches de potiron'}),
      quantity: 1,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 1,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 1,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 10,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 9,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Filets de volaille'}),
      quantity: 1,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Jambon fumé'}),
      quantity: 1,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Chèvre frais'}),
      quantity: 25,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Tomates séchées'}),
      quantity: 1,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Pignons de pin'}),
      quantity: 1,
    }, {
      dishId: 10,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Agneau haché (épaule ou gigot)'}),
      quantity: 200,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: 2,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Cannelle'}),
      quantity: 1,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Cumin'}),
      quantity: 1,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 4,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Yaourt nature'}),
      quantity: 1,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 11,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 3,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 2,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Poivrons rouges'}),
      quantity: 1,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Curcuma'}),
      quantity: 1,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 12,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Viande hachée'}),
      quantity: 100,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Purée'}),
      quantity: 75,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: 25,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: 10,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 10,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 10,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: 1,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 13,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 14,
      ingredientId: getId(ingredients, {name: 'Patates douces'}),
      quantity: 250,
    }, {
      dishId: 14,
      ingredientId: getId(ingredients, {name: 'Marrons entiers cuits'}),
      quantity: 50,
    }, {
      dishId: 14,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 1,
    }, {
      dishId: 14,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 14,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Polenta'}),
      quantity: 25,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 12.5,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: 15,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 15,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Coeurs d\'artichauts'}),
      quantity: 2,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Bleu (fromage)'}),
      quantity: 40,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.5,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 3,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: 1,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 16,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Tomates cerises'}),
      quantity: 70,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 7,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 5,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: 20,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Chèvre frais'}),
      quantity: 15,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: 1,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 17,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Chipolatas'}),
      quantity: 1,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Purée de tomates'}),
      quantity: 125,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Piment en poudre'}),
      quantity: 1,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 18,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Chèvre frais'}),
      quantity: 15,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Lardons'}),
      quantity: 40,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Champignons de Paris'}),
      quantity: 10,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: 1,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 19,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Poivrons jaunes'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Aubergines'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Jambon blanc'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Piment en poudre'}),
      quantity: 1,
    }, {
      dishId: 20,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: 1,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 1,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 25,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.5,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 21,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Filets de cabillaud'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.25,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Laurier'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: 1,
    }, {
      dishId: 22,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 1,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: 1,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Riz à risotto (aborio)'}),
      quantity: 60,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Bouillon de légumes'}),
      quantity: 20,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: 4,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: 15,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 10,
    }, {
      dishId: 23,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 1,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Viande hachée'}),
      quantity: 140,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Haricots rouges'}),
      quantity: 140,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Tomates pelées'}),
      quantity: 140,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Chili'}),
      quantity: 1,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      dishId: 24,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }];

    return entityUtils.createInOrder(app.models.dishIngredients, ingredientsLists);
  },
};
