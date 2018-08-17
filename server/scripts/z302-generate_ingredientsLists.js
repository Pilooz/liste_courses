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
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Concombres'}),
      quantity: '1/2',
    }, {
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: '1',
    }, {
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 1,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Pain de campagne'}),
      quantity: '3',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1/2',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 'quelques',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Citron vert'}),
      quantity: 'quelques',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 2,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Betteraves'}),
      quantity: '1/2',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: 'quelques',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Huile de colza'}),
      quantity: '1',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 3,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: '1/2',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: '10',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 'quelques',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Pignons de pin'}),
      quantity: 'quelques',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: '1',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 4,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '100',
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: null,
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: 'quelques',
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 5,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: '75',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '75',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: '50',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Crème de gruyère'}),
      quantity: '1/2',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Jaune d\'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '1/2',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1/2',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 6,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Artichauts'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Gros sel'}),
      quantity: null,
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '3',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Moutarde à l\'ancienne'}),
      quantity: '1/2',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 7,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Aubergines'}),
      quantity: '1',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: '1',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '0,5',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: '0,5',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 8,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Thon'}),
      quantity: '75',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 'quelques',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '2',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: '1/2',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: '1',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Petits Suisses'}),
      quantity: '1/2',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Paprika'}),
      quantity: 'quelques',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 9,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: '1/2',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Feta'}),
      quantity: '50',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1/2',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Olives noires'}),
      quantity: 'quelques',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: 'quelques',
    }, {
      recipeId: 10,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Bacon'}),
      quantity: '1',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '7',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '2',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 11,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Melons'}),
      quantity: '1/4',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Jambon fumé'}),
      quantity: '1',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Feta'}),
      quantity: '50',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Vinaigre balsamique'}),
      quantity: '1',
    }, {
      recipeId: 12,
      ingredientId: getId(ingredients, {name: 'Menthe'}),
      quantity: 'quelques',
    }, {
      recipeId: 13,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: '125',
    }, {
      recipeId: 13,
      ingredientId: getId(ingredients, {name: 'Oignons rouges'}),
      quantity: '1/4',
    }, {
      recipeId: 13,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: '2',
    }, {
      recipeId: 13,
      ingredientId: getId(ingredients, {name: 'Cornichons'}),
      quantity: '2',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Choux blanc'}),
      quantity: '100',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '1',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: '25',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Fromage blanc'}),
      quantity: '25',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Vinaigre de cidre'}),
      quantity: '1',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: '1',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 14,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '150',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: null,
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Ciboulette'}),
      quantity: null,
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: null,
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Basilic'}),
      quantity: null,
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 15,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 16,
      ingredientId: getId(ingredients, {name: 'Coeurs de palmiers'}),
      quantity: '70',
    }, {
      recipeId: 16,
      ingredientId: getId(ingredients, {name: 'Surimi'}),
      quantity: '1',
    }, {
      recipeId: 16,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: '1',
    }, {
      recipeId: 16,
      ingredientId: getId(ingredients, {name: 'Mayonnaise'}),
      quantity: '1/4',
    }, {
      recipeId: 16,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: null,
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Champignons de Paris'}),
      quantity: '50',
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Maïs'}),
      quantity: '75',
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: '1/4',
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: '1/4',
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 17,
      ingredientId: getId(ingredients, {name: 'Fromage blanc'}),
      quantity: '1',
    }, {
      recipeId: 18,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: '1/2',
    }, {
      recipeId: 18,
      ingredientId: getId(ingredients, {name: 'Maïs'}),
      quantity: '75g',
    }, {
      recipeId: 18,
      ingredientId: getId(ingredients, {name: 'Moutarde'}),
      quantity: '1/4',
    }, {
      recipeId: 18,
      ingredientId: getId(ingredients, {name: 'Vinaigre de vin'}),
      quantity: '1/4',
    }, {
      recipeId: 18,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '2',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '12',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '15',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: '12',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '40',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Noix de muscade'}),
      quantity: '1',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 19,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Saumon fumé'}),
      quantity: '1',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: '1/2',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '2,5',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1/4',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Aneth'}),
      quantity: null,
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Menthe'}),
      quantity: null,
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 20,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Veau à blanquette'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 21,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Filets de poisson blanc'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Noix de muscade'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Clou de girofle'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 22,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 23,
      ingredientId: getId(ingredients, {name: 'Brocolis'}),
      quantity: '1',
    }, {
      recipeId: 23,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '1',
    }, {
      recipeId: 23,
      ingredientId: getId(ingredients, {name: 'Fleur de maïs (Maïzena)'}),
      quantity: '1',
    }, {
      recipeId: 23,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 23,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Eau'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Lentilles'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Lardons'}),
      quantity: '1',
    }, {
      recipeId: 24,
      ingredientId: getId(ingredients, {name: 'Bouquet garni'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Pâtes'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Epinards'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: '1',
    }, {
      recipeId: 25,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Filets de merlan'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Carottes'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 26,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Râble de lapin'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Pommes golden'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Cidre brut'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Crème liquide'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 27,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Filets de poisson blanc'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 28,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Potiron'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 29,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Filets de volaille'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Jambon fumé'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Chèvre frais'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Tomates séchées'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Pignons de pin'}),
      quantity: '1',
    }, {
      recipeId: 30,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Agneau haché (épaule ou gigot)'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Cannelle'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Cumin'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Persil'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Yaourt nature'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 31,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Poivrons rouges'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Curcuma'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 32,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Viande hachée'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Purée'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 33,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 34,
      ingredientId: getId(ingredients, {name: 'Patates douces'}),
      quantity: '1',
    }, {
      recipeId: 34,
      ingredientId: getId(ingredients, {name: 'Marrons entiers cuits'}),
      quantity: '1',
    }, {
      recipeId: 34,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 34,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 34,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Polenta'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 35,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Coeurs d\'artichauts'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Bleu (fromage)'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 36,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Tomates cerises'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Lait'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Farine'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Fromage de chèvre frais'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 37,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Chipolatas'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Purée de tomates'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Piment en poudre'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 38,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Bûchette de fromage de chèvre'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Lardons'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Champignons de Paris'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 39,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Poivrons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Aubergines'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Echalotes'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Jambon blanc'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Herbes de provence'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Piment en poudre'}),
      quantity: '1',
    }, {
      recipeId: 40,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Courgettes'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Gruyère râpé'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Œufs'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 41,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Filets de cabillaud'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Tomates'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Pommes de terre'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Laurier'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Thym'}),
      quantity: '1',
    }, {
      recipeId: 42,
      ingredientId: getId(ingredients, {name: 'Jus de citron'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Poireaux'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Riz à risotto (aborio)'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Bouillon cube'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Vin blanc'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Parmesan'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Beurre'}),
      quantity: '1',
    }, {
      recipeId: 43,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Oignons jaunes'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Ail'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Viande hachée'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Crème fraîche'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Haricots rouges'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Tomates pelées'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Chili'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Sel'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Poivre'}),
      quantity: '1',
    }, {
      recipeId: 44,
      ingredientId: getId(ingredients, {name: 'Huile d\'olive'}),
      quantity: '1',
    }];

    return entityUtils.createInOrder(app.models.ingredientsList, ingredientsLists);
  },
};
