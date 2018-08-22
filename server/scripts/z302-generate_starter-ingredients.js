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
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Concombres'}),
      quantity: 0.5,
    }, {
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 1,
    }, {
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 1,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Pain de campagne'}),
      quantity: 3,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.5,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 2,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Betteraves'}),
      quantity: 0.5,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 0.5,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Huile de colza'}),
      quantity: 1,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 3,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: 0.5,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: 10,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 0.5,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Pignons de pin'}),
      quantity: 1,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 1,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 4,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 1,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 0.5,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 5,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: 0.5,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 1,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: 1,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 20,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 0.75,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.5,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 6,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Artichauts'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Gros sel'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 2,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 6,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 7,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Aubergines'}),
      quantity: 1,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 1,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: 1,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 2,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 2,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 8,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Thon'}),
      quantity: 75,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 2,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.5,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: 0.5,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 3,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Petits Suisses'}),
      quantity: 0.5,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Paprika'}),
      quantity: 1,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 9,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: 0.5,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Feta'}),
      quantity: 50,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: 0.5,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 2,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Olives'}),
      quantity: 5,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 2,
    }, {
      starterId: 10,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Bacon'}),
      quantity: 1,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 5,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 20,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 11,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: 1,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Melons'}),
      quantity: 0.25,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Jambon fumé'}),
      quantity: 5,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Feta'}),
      quantity: 50,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 3,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Vinaigre balsamique'}),
      quantity: 1,
    }, {
      starterId: 12,
      ingredientId: getId(ingredients, {name: 'Menthe'}),
      quantity: 2,
    }, {
      starterId: 13,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: 125,
    }, {
      starterId: 13,
      ingredientId: getId(ingredients, {name: 'Oignons rouges'}),
      quantity: 0.25,
    }, {
      starterId: 13,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: 1,
    }, {
      starterId: 13,
      ingredientId: getId(ingredients, {name: 'Cornichons'}),
      quantity: 3,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Choux blanc'}),
      quantity: 100,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 1,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: 2,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Fromage blanc'}),
      quantity: 25,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Vinaigre de cidre'}),
      quantity: 3,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: 1,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 14,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: 2,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 5,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 0.25,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 20,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: 1,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 2,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 15,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 16,
      ingredientId: getId(ingredients, {name: 'Coeurs de palmiers'}),
      quantity: 70,
    }, {
      starterId: 16,
      ingredientId: getId(ingredients, {name: 'Bâton de surimi'}),
      quantity: 1,
    }, {
      starterId: 16,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 1,
    }, {
      starterId: 16,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: 0.25,
    }, {
      starterId: 16,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: 1,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Champignons de Paris'}),
      quantity: 50,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Maïs'}),
      quantity: 75,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: 0.25,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 0.25,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 17,
      ingredientId: getId(ingredients, {name: 'Fromage blanc'}),
      quantity: 1,
    }, {
      starterId: 18,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: 0.5,
    }, {
      starterId: 18,
      ingredientId: getId(ingredients, {name: 'Maïs'}),
      quantity: 75,
    }, {
      starterId: 18,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: 0.25,
    }, {
      starterId: 18,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 0.25,
    }, {
      starterId: 18,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: 12,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: 15,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: 12,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: 40,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Noix de muscade'}),
      quantity: 1,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 19,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Saumon fumé'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: 0.5,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: 1.5,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: 0.25,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Aneth'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Menthe'}),
      quantity: 2,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: 1,
    }, {
      starterId: 20,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: 1,
    }];

    return entityUtils.createInOrder(app.models.starterIngredients, ingredientsLists);
  },
};
