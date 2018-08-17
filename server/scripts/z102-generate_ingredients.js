'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const ingredients = [{
      name: 'Agneau haché (épaule ou gigot)',
      unit: 'g',
    }, {
      name: 'Ail',
      unit: 'gousse',
    }, {
      name: 'Aneth',
    }, {
      name: 'Artichauts',
      unit: null,
    }, {
      name: 'Aubergines',
      unit: 'g',
    }, {
      name: 'Bacon',
      unit: 'tranche',
    }, {
      name: 'Basilic',
      unit: 'feuilles',
    }, {
      name: 'Surimi',
      unit: 'batpnnet',
    }, {
      name: 'Betteraves',
      unit: 'g',
    }, {
      name: 'Beurre',
      unit: 'g',
    }, {
      name: 'Bleu (fromage)',
      unit: 'g',
    }, {
      name: 'Bouillon cube',
      unit: null,
    }, {
      name: 'Bouquet garni',
      unit: null,
    }, {
      name: 'Brocolis',
      unit: 'g',
    }, {
      name: 'Bûchette de fromage de chèvre',
      unit: 'g',
    }, {
      name: 'Cannelle',
      unit: 'g',
    }, {
      name: 'Carottes',
      unit: 'g',
    }, {
      name: 'Champignons de Paris',
      unit: 'g',
    }, {
      name: 'Chèvre frais',
      unit: 'g',
    }, {
      name: 'Chili',
      unit: 'g',
    }, {
      name: 'Chipolatas',
      unit: 'g',
    }, {
      name: 'Choux blanc',
      unit: 'g',
    }, {
      name: 'Ciboulette',
      unit: 'brin',
    }, {
      name: 'Cidre brut',
      unit: 'cl',
    }, {
      name: 'Citron jaune',
      unit: 'g',
    }, {
      name: 'Citron vert',
      unit: 'g',
    }, {
      name: 'Clou de girofle',
      unit: null,
    }, {
      name: 'Coeurs d\'artichauts',
      unit: 'g',
    }, {
      name: 'Coeurs de palmiers',
      unit: 'g',
    }, {
      name: 'Concombres',
      unit: 'g',
    }, {
      name: 'Cornichons',
      unit: null,
    }, {
      name: 'Courgettes',
      unit: 'g',
    }, {
      name: 'Crème de gruyère',
      unit: 'g',
    }, {
      name: 'Crème fraîche',
      unit: 'g',
    }, {
      name: 'Crème liquide',
      unit: 'cl',
    }, {
      name: 'Cumin',
      unit: 'g',
    }, {
      name: 'Curcuma',
      unit: 'g',
    }, {
      name: 'Eau',
      unit: 'cl',
    }, {
      name: 'Echalotes',
      unit: null,
    }, {
      name: 'Epinards',
      unit: 'g',
    }, {
      name: 'Farine',
      unit: 'g',
    }, {
      name: 'Feta',
      unit: 'g',
    }, {
      name: 'Filets de cabillaud',
      unit: 'g',
    }, {
      name: 'Filets de merlan',
      unit: 'g',
    }, {
      name: 'Filets de poisson blanc',
      unit: 'g',
    }, {
      name: 'Filets de volaille',
      unit: 'g',
    }, {
      name: 'Fleur de maïs (Maïzena)',
      unit: 'g',
    }, {
      name: 'Fromage blanc',
      unit: 'g',
    }, {
      name: 'Fromage de chèvre frais',
      unit: 'g',
    }, {
      name: 'Gros sel',
      unit: 'g',
    }, {
      name: 'Gruyère râpé',
      unit: 'g',
    }, {
      name: 'Haricots rouges',
      unit: 'g',
    }, {
      name: 'Herbes de provence',
      unit: 'g',
    }, {
      name: 'Huile d\'olive',
      unit: 'cl',
    }, {
      name: 'Huile de colza',
      unit: 'cl',
    }, {
      name: 'Jambon blanc',
      unit: 'g',
    }, {
      name: 'Jambon fumé',
      unit: 'g',
    }, {
      name: 'Jaune d\'Œufs',
      unit: null,
    }, {
      name: 'Jus de citron',
      unit: 'cl',
    }, {
      name: 'Lait',
      unit: 'cl',
    }, {
      name: 'Lardons',
      unit: 'g',
    }, {
      name: 'Laurier',
      unit: 'feuille',
    }, {
      name: 'Lentilles',
      unit: 'g',
    }, {
      name: 'Maïs',
      unit: 'g',
    }, {
      name: 'Marrons entiers cuits',
      unit: 'g',
    }, {
      name: 'Mayonnaise',
      unit: 'g',
    }, {
      name: 'Melons',
      unit: 'g',
    }, {
      name: 'Menthe',
      unit: 'feuille',
    }, {
      name: 'Moutarde',
      unit: 'g',
    }, {
      name: 'Moutarde à l\'ancienne',
      unit: 'g',
    }, {
      name: 'Noix de muscade',
      unit: 'g',
    }, {
      name: 'Œufs',
      unit: null,
    }, {
      name: 'Oignons jaunes',
      unit: null,
    }, {
      name: 'Oignons rouges',
      unit: null,
    }, {
      name: 'Olives noires',
      unit: 'g',
    }, {
      name: 'Pain de campagne',
      unit: 'g',
    }, {
      name: 'Paprika',
      unit: 'g',
    }, {
      name: 'Parmesan',
      unit: 'g',
    }, {
      name: 'Patates douces',
      unit: 'g',
    }, {
      name: 'Pâtes',
      unit: 'g',
    }, {
      name: 'Persil',
      unit: 'branche',
    }, {
      name: 'Petits Suisses',
      unit: 'g',
    }, {
      name: 'Pignons de pin',
      unit: 'g',
    }, {
      name: 'Piment en poudre',
      unit: 'g',
    }, {
      name: 'Poireaux',
      unit: 'g',
    }, {
      name: 'Poivre',
      unit: 'g',
    }, {
      name: 'Poivrons jaunes',
      unit: 'g',
    }, {
      name: 'Poivrons rouges',
      unit: 'g',
    }, {
      name: 'Polenta',
      unit: 'g',
    }, {
      name: 'Pommes de terre',
      unit: 'g',
    }, {
      name: 'Pommes golden',
      unit: 'g',
    }, {
      name: 'Purée',
      unit: 'g',
    }, {
      name: 'Purée de tomates',
      unit: 'g',
    }, {
      name: 'Râble de lapin',
      unit: 'g',
    }, {
      name: 'Riz à risotto (aborio)',
      unit: 'g',
    }, {
      name: 'Saumon fumé',
      unit: 'g',
    }, {
      name: 'Sel',
      unit: 'g',
    }, {
      name: 'Thon',
      unit: 'g',
    }, {
      name: 'Thym',
      unit: 'branche',
    }, {
      name: 'Tomates',
      unit: 'g',
    }, {
      name: 'Tomates cerises',
      unit: 'g',
    }, {
      name: 'Tomates pelées',
      unit: 'g',
    }, {
      name: 'Tomates séchées',
      unit: 'g',
    }, {
      name: 'Potiron',
      unit: 'g',
    }, {
      name: 'Veau à blanquette',
      unit: 'g',
    }, {
      name: 'Viande hachée',
      unit: 'g',
    }, {
      name: 'Vin blanc',
      unit: 'cl',
    }, {
      name: 'Vinaigre balsamique',
      unit: 'cl',
    }, {
      name: 'Vinaigre de cidre',
      unit: 'cl',
    }, {
      name: 'Vinaigre de vin',
      unit: 'cl',
    }, {
      name: 'Yaourt nature',
      unit: 'g',
    }];

    return entityUtils.createInOrder(app.models.ingredient, ingredients);
  },
};
