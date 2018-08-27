'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const ingredients = [{
      name: 'Agneau haché (épaule ou gigot)',
      unit: 'g',
    }, {
      name: 'Ail',
      unit: 'gousses',
    }, {
      name: 'Aneth',
      unit: 'càc',
    }, {
      name: 'Artichauts',
      unit: null,
    }, {
      name: 'Aubergines',
      unit: null,
    }, {
      name: 'Bacon',
      unit: 'tranches',
    }, {
      name: 'Basilic',
      unit: 'feuilles',
    }, {
      name: 'Bâton de surimi',
      unit: null,
    }, {
      name: 'Betteraves',
    }, {
      name: 'Beurre',
      unit: 'g',
    }, {
      name: 'Bleu (fromage)',
      unit: 'g',
    }, {
      name: 'Bouillon de légumes',
      unit: 'cl',
    }, {
      name: 'Bouquet garni',
      unit: null,
    }, {
      name: 'Brocolis',
      unit: 'g',
    }, {
      name: 'Cannelle',
      unit: 'càc',
    }, {
      name: 'Carottes',
      unit: null,
    }, {
      name: 'Champignons de Paris',
      unit: 'g',
    }, {
      name: 'Chèvre frais',
      unit: 'g',
    }, {
      name: 'Chili',
      unit: 'càc',
    }, {
      name: 'Chipolatas',
      unit: null,
    }, {
      name: 'Choux blanc',
      unit: 'g',
    }, {
      name: 'Ciboulette',
      unit: 'càs',
    }, {
      name: 'Cidre brut',
      unit: 'cl',
    }, {
      name: 'Clou de girofle',
      unit: null,
    }, {
      name: 'Coeurs d\'artichauts',
      unit: null,
    }, {
      name: 'Coeurs de palmiers',
      unit: 'g',
    }, {
      name: 'Concombres',
      unit: null,
    }, {
      name: 'Cornichons',
      unit: null,
    }, {
      name: 'Courgettes',
      unit: null,
    }, {
      name: 'Crème fraîche',
      unit: 'càs',
    }, {
      name: 'Crème liquide',
      unit: 'cl',
    }, {
      name: 'Cumin',
      unit: 'càc',
    }, {
      name: 'Curcuma',
      unit: 'càc',
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
      unit: null,
    }, {
      name: 'Filets de merlan',
      unit: null,
    }, {
      name: 'Filets de poisson blanc',
      unit: 'g',
    }, {
      name: 'Filets de volaille',
      unit: null,
    }, {
      name: 'Fleur de maïs (Maïzena)',
      unit: 'g',
    }, {
      name: 'Fromage blanc',
      unit: 'g',
    }, {
      name: 'Gros sel',
      unit: 'pincées',
    }, {
      name: 'Gruyère râpé',
      unit: 'g',
    }, {
      name: 'Haricots rouges',
      unit: 'g',
    }, {
      name: 'Herbes de provence',
      unit: 'càc',
    }, {
      name: 'Huile d\'olive',
      unit: 'càc',
    }, {
      name: 'Huile de colza',
      unit: 'càc',
    }, {
      name: 'Jambon blanc',
      unit: 'tranches',
    }, {
      name: 'Jambon fumé',
      unit: 'tranches',
    }, {
      name: 'Jus de citron',
      unit: 'càc',
    }, {
      name: 'Lait',
      unit: 'cl',
    }, {
      name: 'Lardons',
      unit: 'g',
    }, {
      name: 'Laurier',
      unit: 'càc',
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
      unit: 'càs',
    }, {
      name: 'Melons',
      unit: null,
    }, {
      name: 'Menthe',
      unit: 'feuilles',
    }, {
      name: 'Moutarde',
      unit: 'g',
    }, {
      name: 'Noix de muscade',
      unit: 'pincées',
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
      name: 'Olives',
      unit: null,
    }, {
      name: 'Pain de campagne',
      unit: 'tranches',
    }, {
      name: 'Paprika',
      unit: 'pincées',
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
      unit: 'branches',
    }, {
      name: 'Petits Suisses',
      unit: null,
    }, {
      name: 'Pignons de pin',
      unit: 'càc',
    }, {
      name: 'Piment en poudre',
      unit: 'càc',
    }, {
      name: 'Poireaux',
      unit: null,
    }, {
      name: 'Poivre',
      unit: 'pincées',
    }, {
      name: 'Poivrons jaunes',
      unit: null,
    }, {
      name: 'Poivrons rouges',
      unit: null,
    }, {
      name: 'Polenta',
      unit: 'g',
    }, {
      name: 'Pommes de terre',
      unit: null,
    }, {
      name: 'Pommes golden',
      unit: null,
    }, {
      name: 'Purée',
      unit: 'g',
    }, {
      name: 'Purée de tomates',
      unit: 'g',
    }, {
      name: 'Râble de lapin',
      unit: null,
    }, {
      name: 'Riz à risotto (aborio)',
      unit: 'g',
    }, {
      name: 'Saumon fumé',
      unit: 'tranches',
    }, {
      name: 'Sel',
      unit: 'pincées',
    }, {
      name: 'Thon',
      unit: 'g',
    }, {
      name: 'Thym',
      unit: 'càc',
    }, {
      name: 'Tomates',
      unit: null,
    }, {
      name: 'Tomates cerises',
      unit: 'g',
    }, {
      name: 'Tomates pelées',
      unit: 'g',
    }, {
      name: 'Tomates séchées',
      unit: null,
    }, {
      name: 'Tranches de potiron',
      unit: null,
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
      unit: 'càc',
    }, {
      name: 'Vinaigre de cidre',
      unit: 'càc',
    }, {
      name: 'Vinaigre de vin',
      unit: 'càc',
    }, {
      name: 'Yaourt nature',
      unit: null,
    }];

    return entityUtils.createInOrder(app.models.ingredient, ingredients);
  },
};
