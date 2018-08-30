'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const dishes = [{
      name: 'Blanquette de veau à l\'ancienne',
      description: '<ul><li>Faire revenir les morceaux de veau avec l\'huile dans une cocotte.</li><li>Éplucher les ' +
      'carottes, les laver, les couper en rondelles.</li><li>Les ajouter au veau.</li><li>Mouiller la viande avec de ' +
      'l\'eau jusqu\'à recouvrir la viande.</li><li>Ajouter le bouquet garni, le sel et le poivre.</li><li>Couvrir et ' +
      'cuire à feu doux environ 1 heure.</li><li>Après cuisson, réserver la viande au chaud.</li><li>Prélever une petite ' +
      'louche de bouillon pour diluer la farine petit à petit.</li><li>Verser dans la cocotte, faire épaissir à ' +
      'petit bouillon.</li><li>Ajouter la crème et jaune d\'oeuf: la sauce doit être onctueuse.</li><li>Servir la viande ' +
      'nappée de sauce.</li></ul>',
    }, {
      name: 'Flan de poisson au coulis de tomate',
      description: '<ul><li>Pocher les filets de poisson dans le courtbouillon.</li><li>Les émietter en enlevant les ' +
      'arêtes.</li><li>Dans un saladier, mélanger la farine, le lait, les oeufs, le fromage râpé, le poisson ' +
      'émietté et une pincée de sel.</li><li>Verser le tout dans un petit moule à cake, et enfourner au four ' +
      'préchauffé (th. 6 - 180 °C°) pendant 20 min.</li><li>Server nappé d\'un coulis de tomates "maison" ou du ' +
      'commerce.</li></ul>',
    }, {
      name: 'Crème de brocolis béchamel',
      description: '<ul><li>Faire cuire les brocolis.</li><li>Faire un roux blanc :</li><li>faire fondre le beurre, ajouter la ' +
      'fleur de maïs dès que le beurre est fondu.</li><li>Mélanger avec une spatule en bois pour obtenir un mélange ' +
      'riche et homogène.</li><li>Laisser hors du feu.</li><li>Ajouter le lait en poudre au lait et faire chauffer le tout. ' +
      'Le mélanger au roux à l\'aide d\'un fouet.</li><li>Faire chauffer la sauce à feu doux en remuant sans cesse ' +
      'avec la spatule jusqu\'à épaississement.</li><li>Mixer les légumes et incorporer la sauce Béchamel.</li><li>Ajouter ' +
      'si nécessaire de la crème fraîche.</li></ul>',
    }, {
      name: 'Soupe de lentilles au lard',
      description: '<ul><li>Portez l\'eau à ébullition et mettez-y à cuire les lentilles, les oignons et les ' +
      'carottes avec le bouquet garni pendant 30 minutes - ou faites cuire 15 minutes à l\'autocuiseur. ' +
      '</li><li>Si la soupe est trop épaisse en fin de cuisson, ajoutez un peu d\'eau.</li><li>Ôtez le bouquet garni, et, ' +
      'selon votre convenance, mixez ou pas la soupe.</li><li>Faites revenir les lardons à la poêle, sans matière ' +
      'grasse.</li><li>Jetez-les dans la soupe et servez.</li></ul>',
    }, {
      name: 'Gratin de pâtes aux épinards et à la tomate',
      description: '<ul><li>Faites cuire les pâtes puis égouttez-les.</li><li>Tapissez le plat à gratin graissé avec ' +
      'les tomates au naturel ou en rondelles et les oignons émincés.</li><li>Recouvrez avec les pâtes puis par ' +
      'une couche d\'épinards et l\'ail écrasé.</li><li>Versez la crème, salez et poivrez.</li><li>Saupoudrez avec le ' +
      'parmesan.</li><li>Mettez au four à 200 °C pendant 15 minutes et servez aussitôt.</li></ul>',
    }, {
      name: 'Filets de merlan aux poireaux',
      description: '<ul><li>Lavez les légumes.</li><li>Pelez la carotte et coupez la en petits bâtonnets.</li><li>Coupez les ' +
      'poireaux en rondelles et faites-les cuire à l\'étouffée.</li><li>Faites revenir l\'oignon émincé dans l\'huile. ' +
      'Dans un plat à gratin, répartissez lescarottes et les poireaux, puis déposez-y les filets de merlan ' +
      'et enfin les oignons.</li><li>Arrosez avec le vin blanc, assaisonnez et parsemez le tout d\'emmental râpé. ' +
      '</li><li>Passez au four 30 minutes à 240 °C (thermostat 8).</li><li>Saupoudrez de persil.</li></ul>',
    }, {
      name: 'Lapin à la normande',
      description: '<ul><li>Dans une cocotte, faites revenir le râble de lapin de chaque côté dans un peu ' +
      'd\'huile.</li><li>Épluchez oignons, ail et  pommes.</li><li>Émincez-les et ajoutez-les au fur et à mesure dans ' +
      'la cocotte.</li><li>Versez le cidre, salez, poivrez, couvrez et laissez mijoter 1 heure.</li><li>Avant de servir, ' +
      'incorporez la crème dans la cocotte et remuez pendant 1 minute.</li></ul>',
    }, {
      name: 'Papillote de cabillaud',
      description: '<ul><li>Mettez le poisson dans du papier sulfurisé.</li><li>Recouvrez-le de la tomate coupée en ' +
      'rondelles, de l\'échalote émincée, du thym et du persil ciselé.</li><li>Salez, poivrez et arrosez avec ' +
      'l\'huile d\'olive.</li><li>Fermez la papillote.</li><li>Enfournez au micro-ondes à puissance maximale pendant ' +
      'environ 10 minutes.</li></ul>',
    }, {
      name: 'Gratin de potiron',
      description: '<ul><li>Nettoyez la tranche de potiron, coupez-la en petits morceaux.</li><li>Faites cuire environ ' +
      '10 minutes dans de l\'eau bouillante, puis rafraîchissez sous un filet d\'eau froide et égouttez. ' +
      '</li><li>Faites fondre les oignons émincés dans une poêle.</li><li>Dans un plat à gratin frotté d\'une gousse d\'ail, ' +
      'disposez des couches alternées d\'oignon et de potiron, assaisonnez puis recouvrez de fromage râpé ' +
      'et passez au four 15 minutes.</li></ul>',
    }, {
      name: 'Roulé de volaille au jambon cru',
      description: '<ul><li>Aplatir les filets de volaille au rouleau à pâtisserie si besoin.</li><li>Dans un bol, ' +
      'écraser le fromage et mélanger avec les pignons, les tomates séchées et les herbes fraîches, le tout ' +
      'finement hachés.</li><li>Répartir cette garniture sur les filets de volaille, en formant une bande.</li><li>Rouler ' +
      'les filets autour de cette bande et faire tenir en enroulant autour une tranche de jambon ' +
      'cru.</li><li>Cuire au four à 200 °C pendant 20 minutes environ.</li><li>Servir chaud, tiède ou froid (découpés en ' +
      'tranches).</li></ul>',
    }, {
      name: 'Boulettes d\'agneau sauce Yaourt au Cumin',
      description: '<ul><li>Mixer les échalotes ou oignons et le persil.</li><li>Ajoutez-y la viande hachée, les épices, ' +
      'sel et poivre.</li><li>Mélanger le tout et former des petites boulettes.</li><li>Graisser la poêle avec un sopalin ' +
      'huilé et faire dorer les boulettes quelques minutes.</li><li>Mélanger le yaourt avec le cumin, le sel et le ' +
      'poivre.</li><li>Servir les boulettes chaudes avec la sauce au yaourt.</li></ul>',
    }, {
      name: 'Omellette aux poivrons',
      description: '<ul><li>Faire chauffer l\'huile dans une poêle, couper les oignons en lamelles, les ajouter ' +
      'à l\'huile.</li><li>Epépiner le poivron, le couper en petits dés, l\'ajouter à l\'oignon.</li><li>Laisser suer à feu ' +
      'doux pendant 30 min environ, les oignons et les poivrons doivent être cuits.</li><li>Faire chauffer un peu ' +
      'd\'huile dans une autre poêle de taille moyenne à feu vif, battre les œufs dans un bol, verser dans ' +
      'la seconde poêle.</li><li>Verser les oignons et poivrons sur les oeufs, cuire selon votre goût. ' +
      '</li><li>Glisser l\'omelette dans une grande assiette.</li></ul>',
    }, {
      name: 'Hachis Parmentier',
      description: '<ul><li>Hacher ail et oignons.</li><li>Les faire revenir dans le beurre jusqu\'à ce qu\'ils ' +
      'soient tendres.</li><li>Ajouter les tomates coupées en dés, la viande hachée, la farine, du sel, du poivre ' +
      'et les herbes de Provence.</li><li>Quand tout est cuit, couper le feu et ajouter le jaune d\'oeuf et un peu ' +
      'de parmesan.</li><li>Bien mélanger.</li><li>Préchauffer le four à 200°C (thermostat 6-7).</li><li>Etaler au fond du plat à ' +
      'gratin.</li><li>Préparer la purée.</li><li>L\'étaler au dessus de la viande.</li><li>Saupoudrer de fromage râpé et faire ' +
      'gratiner.</li></ul>',
    }, {
      name: 'Purée de patates douces et châtaignes',
      description: '<ul><li>Mettre une grande quantité d\'eau salé à bouillir.</li><li>Pendant ce temps, éplucher les ' +
      'patates douces et les couper en gros morceaux.</li><li>Les mettre à cuire pendant 20 minutes.</li><li>Une fois ' +
      'que les morceaux sont bien tendres, les écraser au presse-purée avec les marrons et la crème. ' +
      '</li><li>Rectifier l\'assaisonnement et servir chaud.</li></ul>',
    }, {
      name: 'Galettes de Polenta',
      description: '<ul><li>Dans une casserole, faire bouillir le lait.</li><li>Saler et poivrer.</li><li>Ajouter en pluie la ' +
      'polenta, laisser sur feu doux.</li><li>Remuer jusqu\'à ce que la préparation se détache de la paroi pendant ' +
      '5 min.</li><li>Ajouter le parmesan.</li><li>Laisser tiédir.</li><li>Modeler la préparation en forme de galette ou bâtonnet ' +
      'sur une plaque.</li><li>Laisser refroidir Faire dorer à la dernière minute dans une poêle.</li><li>Servez.</li></ul>',
    }, {
      name: 'Gratin de cœurs d\'artichauts au bleu',
      description: '<ul><li>Rincer les cœurs d\'artichauts sous l\'eau froide puis les égoutter.</li><li>Les couper en ' +
      'morceaux.</li><li>Mixer le roquefort avec la crème fraîche jusqu\'à obtenir une texture sans morceaux. ' +
      '</li><li>Saler et poivrer.</li><li>Mettre l\'artichaut à cuire dans une poêle avec l\'huile d\'olive.</li><li>Laisser cuire ' +
      '5 minutes à feu moyen en mélangeant régulièrement.</li><li>Préchauffer le gril du four.</li><li>Mettre les ' +
      'artichauts dans un mixer jusqu\'à obtenir une purée grossière.</li><li>Rectifier l\'assaisonnement.</li><li>Mettre ' +
      'cette purée dans un plat à gratin beurré (ou des plats individuels) puis ajouter la préparation ' +
      'au fromage.</li><li>Faire dorer légèrement au four et servir aussitôt.</li></ul>',
    }, {
      name: 'Clafoutis tomates cerises et fromage de chèvre',
      description: '<ul><li>Préchauffer le four thermostat 7 (210°C).</li><li>Laver les tomates cerises (vous pouvez ' +
      'les équeuter selon la texture et la présentation souhaitée).</li><li>Dans un saladier, écraser le chèvre à ' +
      'la fourchette.</li><li>Ajouter le lait, la crème, les œufs battus.</li><li>Bien mélanger (en fonction de la texture ' +
      'souhaitée, vous pouvez ajouter les tomates à ce moment-là et mixer la préparation).</li><li>Ajouter la farine ' +
      'petit à petit et mélanger jusqu\'à obtenir une texture lisse et sans morceaux.</li><li>Assaisonner selon votre ' +
      'goût avec le sel, le poivre et les herbes.</li><li>Dans un plat beurré allant au four, mettre l\'appareil ' +
      '(disposer les tomates cerises selon la présentation souhaitée).</li><li>Cuire au four pendant environ 40 ' +
      'minutes (selon la taille de votre plat et votre four).</li><li>Servir chaud.</li></ul>',
    }, {
      name: 'Oeufs chipolatas et sauce tomates',
      description: '<ul><li>Piquer la chipolatas et les faire griller à feu doux.</li><li>Faire chauffer dans une ' +
      'casserole la purée de tomates.</li><li>Saler, poivrer et ajouter le piment.</li><li>Faire fondre la margarine dans ' +
      'une poêle, y faire cuire les œufs sur le plat.</li><li>Disposer sur chaque assiette un œuf et une chipolata ' +
      'et entourer d\'un cordon de sauce tomate.</li></ul>',
    }, {
      name: 'Tomates farcies au chèvre chaud',
      description: '<ul><li>Faire revenir les lardons et les champignons dans une poêle.</li><li>Couper le dessus des ' +
      'tomates et les vider.</li><li>Couper le fromage de chèvre en petits morceaux.</li><li>Mélanger les champignons, ' +
      'les lardons et le fromage de chèvre, remplir les tomates avec cette mixture.</li><li>Ajouter des herbes de ' +
      'provence.</li><li>Remettre à leur place le dessus des tomates et mettre au four (210°C/thermostat 7) pendant ' +
      '35 minutes.</li></ul>',
    }, {
      name: 'Poivron jaune farci à l\'aubergine',
      description: '<ul><li>Laver les poivrons, les placer sur la grille du four pendant une dizaine de minutes à ' +
      '200°C.</li><li>Pendant ce temps, préparer la farce.</li><li>Dans une casserole, faire revenir dans l\'huile les ' +
      'échalotes et l\'ail coupés en petits morceaux.</li><li>Y ajouter l\'aubergine pelée et coupée en petits cubes. ' +
      '</li><li>Rajouter les tomates coupées en dés et sans la peau.</li><li>Saler, poivrer, ajouter du piment et des herbes ' +
      'de Provence.</li><li>Rajouter le jambon détaillé en petites lamelles.</li><li>Enlever les poivrons du four (ils sont ' +
      'ramollis).</li><li>Y pratiquer une ouverture suffisante pour pouvoir les farcir.</li><li>Enlever les pépins et les ' +
      'filaments blancs.</li><li>Farcir les poivrons du mélange de légumes et les placer dans un plat allant au four. ' +
      'Environ 40 à 45 mn à 200°C (thermostat 6/7).</li></ul>',
    }, {
      name: 'Gratin de courgettes',
      description: '<ul><li>Emincer les oignons.</li><li>Les faire fondre dans le beurre.</li><li>Râper les courgettes avec leur ' +
      'peau.</li><li>Les ajouter aux oignons.</li><li>Préchauffer le four à 200°C (thermostat 6-7).</li><li>Mélanger le gruyère râpé, ' +
      'les oeufs, la crème fraîche, puis saler et poivrer.</li><li>Mettre les courgettes dans un plat et verser par ' +
      'dessus la sauce et faire à four chaud pendant 15 min.</li></ul>',
    }, {
      name: 'Gratin de poisson',
      description: '<ul><li>Faire décongeler les tranches de poisson et les mettre sur du papier absorbant pour ' +
      'enlever l\'excédent d\'eau.</li><li>Laisser de côté (en enlevant le papier absorbant).</li><li>Couper les pommes de ' +
      'terres, les tomates et les oignons en tranches fines.</li><li>Mettre un filet d\'huile dans un plat à gratin. ' +
      'Disposer une couche de pommes de terres, puis les tranches de poisson.</li><li>Saler, poivrer.</li><li>Recouvrir ' +
      'de tranches de tomates et des pommes de terres restantes, puis disposer les oignons tranchés.</li><li>Saler ' +
      'et poivrer légèrement puis rajouter le thym et le laurrier.</li><li>Arroser du jus de citron et d\'un filet ' +
      'd\'huile d\'olive.</li><li>Enfourner dans un four préchauffé à 250°C.</li><li>Laisser cuire environ 30 mn à 250°C, ' +
      'puis réduire le thermostat à 200°C jusqu\'à la fin du temps de cuisson.</li><li>Surveiller la cuisson de ' +
      'temps en temps pour ne pas que les oignons noircissent trop.</li></ul>',
    }, {
      name: 'Risotto aux poireaux',
      description: '<ul><li>Emincer le blanc des poireaux.</li><li>Faire fondre le beurre dans une casserole ou une ' +
      'sauteuse à revêtement anti adhésif.</li><li>Mettre les poireaux à étuver sans qu\'ils brunissent (5 mn ' +
      'environ).</li><li>Ajouter le riz.</li><li>Remuer et laisser le riz devenir translucide sur feu vif.</li><li>Ajouter le vin ' +
      'blanc et attendre qu\'il s\'évapore.</li><li>Ajouter le bouillon, baisser le feu, et attendre qu\'il soit ' +
      'totalement absorbé (environ 20 mn).</li><li>A la fin, ajouter la crème fraîche, du poivre et du parmesan ' +
      'râpé.</li><li>Remuer la préparation, puis la laisser reposer 3 mn hors du feu, avec un couvercle.</li><li>Goûter ' +
      'pour vérifier s\'il est nécessaire de saler (le bouillon et le fromage l\'étant déjà).</li><li>Servir bien chaud.</li></ul>',
    }, {
      name: 'Chili con carne',
      description: '<ul><li>Hacher oignon et ail.</li><li>Faire chauffer l\'huile dans une cocotte, faire fondre ' +
      'l\'oignon et l\'ail.</li><li>Ajouter la viande hachée, la laisser prendre couleur.</li><li>Ajouter la poudre a ' +
      'chili (suivant les goûts, + ou - pimenté).</li><li>Egoutter les haricots, les versez dans la cocotte avec ' +
      'les tomates.</li><li>Remuer et assaisonner.</li><li>Laisser frémir 20 minutes.</li><li>Déguster.</li></ul>',
    }];

    return entityUtils.createInOrder(app.models.dish, dishes);
  },
};
