'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const ingredients = [{
      'name': 'Agneau haché (épaule ou gigot)',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Ail',
      'unit': 'gousses',
      'masculine': false,
    }, {
      'name': 'Aneth',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Artichauts',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Aubergines',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Bacon',
      'unit': 'tranches',
      'masculine': false,
    }, {
      'name': 'Basilic',
      'unit': 'feuilles',
      'masculine': false,
    }, {
      'name': 'Bâton de surimi',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Betteraves',
      'masculine': false,
    }, {
      'name': 'Beurre',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Bleu (fromage)',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Bouillon de légumes',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Bouquet garni',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Brocolis',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Cannelle',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Carottes',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Champignons de Paris',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Chèvre frais',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Chili',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Chipolatas',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Choux blanc',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Ciboulette',
      'unit': 'càs',
      'masculine': false,
    }, {
      'name': 'Cidre brut',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Clou de girofle',
      'unit': null,
      'masculine': true,
    }, {
      'name': "Coeurs d'artichauts",
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Coeurs de palmiers',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Concombres',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Cornichons',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Courgettes',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Crème fraîche',
      'unit': 'càs',
      'masculine': false,
    }, {
      'name': 'Crème liquide',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Cumin',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Curcuma',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Eau',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Echalotes',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Epinards',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Farine',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Feta',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Filets de cabillaud',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Filets de merlan',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Filets de poisson blanc',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Filets de volaille',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Fleur de maïs (Maïzena)',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Fromage blanc',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Gros sel',
      'unit': 'pincées',
      'masculine': false,
    }, {
      'name': 'Gruyère râpé',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Haricots rouges',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Herbes de provence',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': "Huile d'olive",
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Huile de colza',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Jambon blanc',
      'unit': 'tranches',
      'masculine': false,
    }, {
      'name': 'Jambon fumé',
      'unit': 'tranches',
      'masculine': false,
    }, {
      'name': 'Jus de citron',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Lait',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Lardons',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Laurier',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Lentilles',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Maïs',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Marrons entiers cuits',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Mayonnaise',
      'unit': 'càs',
      'masculine': false,
    }, {
      'name': 'Melons',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Menthe',
      'unit': 'feuilles',
      'masculine': false,
    }, {
      'name': 'Moutarde',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Noix de muscade',
      'unit': 'pincées',
      'masculine': false,
    }, {
      'name': 'Œufs',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Oignons jaunes',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Oignons rouges',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Olives',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Pain de campagne',
      'unit': 'tranches',
      'masculine': false,
    }, {
      'name': 'Paprika',
      'unit': 'pincées',
      'masculine': false,
    }, {
      'name': 'Parmesan',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Patates douces',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Pâtes',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Persil',
      'unit': 'branches',
      'masculine': false,
    }, {
      'name': 'Petits Suisses',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Pignons de pin',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Piment en poudre',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Poireaux',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Poivre',
      'unit': 'pincées',
      'masculine': false,
    }, {
      'name': 'Poivrons jaunes',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Poivrons rouges',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Polenta',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Pommes de terre',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Pommes golden',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Purée',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Purée de tomates',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Râble de lapin',
      'unit': null,
      'masculine': true,
    }, {
      'name': 'Riz à risotto (aborio)',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Saumon fumé',
      'unit': 'tranches',
      'masculine': false,
    }, {
      'name': 'Sel',
      'unit': 'pincées',
      'masculine': false,
    }, {
      'name': 'Thon',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Thym',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Tomates',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Tomates cerises',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Tomates pelées',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Tomates séchées',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Tranches de potiron',
      'unit': null,
      'masculine': false,
    }, {
      'name': 'Veau à blanquette',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Viande hachée',
      'unit': 'g',
      'masculine': true,
    }, {
      'name': 'Vin blanc',
      'unit': 'cl',
      'masculine': true,
    }, {
      'name': 'Vinaigre balsamique',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Vinaigre de cidre',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Vinaigre de vin',
      'unit': 'càc',
      'masculine': false,
    }, {
      'name': 'Yaourt nature',
      'unit': null,
      'masculine': true,
    },
    ];

    return entityUtils.createInOrder(app.models.ingredient, ingredients);
  },
};
