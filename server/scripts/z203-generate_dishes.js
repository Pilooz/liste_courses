'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const dishes = [{
      name: 'Blanquette de veau à l\'ancienne',
      description: 'Faire revenir les morceaux de veau avec l’huile dans une cocotte. Éplucher les ' +
      'carottes, les laver, les couper en rondelles. Les ajouter au veau. Mouiller la viande avec 1/2 ' +
      'litre d’eau pour recouvrir la viande. Ajouter le bouquet garni, le sel et le poivre. Couvrir et ' +
      'cuire à feu doux environ 1 heure. Après cuisson, réserver la viande au chaud. Prélever une petite ' +
      'louche de bouillon pour diluer la farine petit à petit. Verser dans la cocotte, faire épaissir à ' +
      'petit bouillon. Ajouter la crème et le jaune d’oeuf: la sauce doit être onctueuse. Servir la viande ' +
      'nappée de sauce.',
    }, {
      name: 'Flan de poisson au coulis de tomate',
      description: 'Pocher les filets de poisson dans le courtbouillon. Les émietter en enlevant les ' +
      'arêtes. Dans un saladier, mélanger la farine, le lait, les oeufs, le fromage râpé, le poisson ' +
      'émietté et une pincée de sel. Verser le tout dans un petit moule à cake, et enfourner au four ' +
      'préchauffé (th. 6 - 180 °C°) pendant 20 min. Server nappé d’un coulis de tomates "maison" ou du ' +
      'commerce.',
    }, {
      name: 'Crème de brocolis béchamel',
      description: 'Faire cuire les brocolis. Faire un roux blanc : faire fondre le beurre, ajouter la ' +
      'fleur de maïs dès que le beurre est fondu. Mélanger avec une spatule en bois pour obtenir un mélange ' +
      'riche et homogène. Laisser hors du feu. Ajouter le lait en poudre au lait et faire chauffer le tout. ' +
      'Le mélanger au roux à l’aide d’un fouet. Faire chauffer la sauce à feu doux en remuant sans cesse ' +
      'avec la spatule jusqu’à épaississement. Mixer les légumes et incorporer la sauce Béchamel. Ajouter ' +
      'si nécessaire de la crème fraîche.',
    }, {
      name: 'Soupe de lentilles au lard',
      description: 'Portez l’eau à ébullition et mettez-y à cuire les lentilles, l’oignon et les ' +
      'carottes avec le bouquet garni pendant 30 minutes - ou faites cuire 15 minutes à l’autocuiseur. ' +
      'Si la soupe est trop épaisse en fin de cuisson, ajoutez un peu d’eau. Ôtez le bouquet garni, et, ' +
      'selon votre convenance, mixez ou pas la soupe. Faites revenir les lardons à la poêle, sans matière ' +
      'grasse. Jetez-les dans la soupe et servez.',
    }, {
      name: 'Gratin de pâtes aux épinards et à la tomate',
      description: 'Faites cuire les pâtes puis égouttez-les. Tapissez le plat à gratin graissé avec ' +
      'les tomates au naturel ou en rondelles et les oignons émincés. Recouvrez avec les pâtes puis par ' +
      'une couche d’épinards et l’ail écrasé. Versez la crème, salez et poivrez. Saupoudrez avec le ' +
      'parmesan. Mettez au four à 200 °C pendant 15 minutes et servez aussitôt.',
    }, {
      name: 'Filets de merlan aux poireaux',
      description: 'Lavez les légumes. Pelez la carotte et coupez la en petits bâtonnets. Coupez les ' +
      'poireaux en rondelles et faites-les cuire à l’étouffée. Faites revenir l’oignon émincé dans l’huile. ' +
      'Dans un plat à gratin, répartissez lescarottes et les poireaux, puis déposez-y les filets de merlan ' +
      'et enfin les oignons. Arrosez avec le vin blanc, assaisonnez et parsemez le tout d’emmental râpé. ' +
      'Passez au four 30 minutes à 240 °C (thermostat 8). Saupoudrez de persil.',
    }, {
      name: 'Lapin à la normande',
      description: 'Dans une cocotte, faites revenir le râble de lapin de chaque côté dans un peu ' +
      'd’huile. Épluchez l’oignon, l’ail et la pomme. Émincez-les et ajoutez-les au fur et à mesure dans ' +
      'la cocotte. Versez le cidre, salez, poivrez, couvrez et laissez mijoter 1 heure. Avant de servir, ' +
      'incorporez la crème dans la cocotte et remuez pendant 1 minute.',
    }, {
      name: 'Papillote de cabillaud',
      description: 'Mettez le poisson dans du papier sulfurisé. Recouvrez-le de la tomate coupée en ' +
      'rondelles, de l’échalote émincée, du thym et du persil ciselé. Salez, poivrez et arrosez avec ' +
      'l’huile d’olive. Fermez la papillote. Enfournez au micro-ondes à puissance maximale pendant ' +
      'environ 10 minutes.',
    }, {
      name: 'Gratin de potiron',
      description: 'Nettoyez la tranche de potiron, coupez-la en petits morceaux. Faites cuire environ ' +
      '10 minutes dans de l’eau bouillante, puis rafraîchissez sous un filet d’eau froide et égouttez. ' +
      'Faites fondre les oignons émincés dans une poêle. Dans un plat à gratin frotté d’une gousse d’ail, ' +
      'disposez des couches alternées d’oignon et de potiron, assaisonnez puis recouvrez de fromage râpé ' +
      'et passez au four 15 minutes.',
    }, {
      name: 'Roulé de volaille au jambon cru',
      description: 'Aplatir les filets de volaille au rouleau à pâtisserie si besoin. Dans un bol, ' +
      'écraser le fromage et mélanger avec les pignons, la tomate séchée et les herbes fraîches, le tout ' +
      'finement hachés. Répartir cette garniture sur les filets de volaille, en formant une bande. Rouler ' +
      'les filets autour de cette bande et faire tenir en enroulant autour une(des) tranche(s) de jambon ' +
      'cru. Cuire au four à 200 °C pendant 20 minutes environ. Servir chaud, tiède ou froid (découpés en ' +
      'tranches).',
    }, {
      name: 'Boulettes d\'agneau sauce Yaourt au Cumin',
      description: 'Mixer les échalotes ou oignons et le persil. Ajoutez-y la viande hachée, les épices, ' +
      'sel et poivre. Mélanger le tout et former des petites boulettes. Graisser la poêle avec un sopalin ' +
      'huilé et faire dorer les boulettes quelques minutes. Mélanger le yaourt avec le cumin, le sel et le ' +
      'poivre. Servir les boulettes chaudes avec la sauce au yaourt.',
    }, {
      name: 'Omellette aux poivrons',
      description: 'Faire chauffer l\'huile dans une poêle, couper les oignons en lamelles, les ajouter ' +
      'à l\'huile. Epépiner le poivron, le couper en petits dés, l\'ajouter à l\'oignon. Laisser suer à feu ' +
      'doux pendant 30 min environ, les oignons et les poivrons doivent être cuits. Faire chauffer un peu ' +
      'd\'huile dans une autre poêle de taille moyenne à feu vif, battre les œufs dans un bol, verser dans ' +
      'la seconde poêle. Verser les oignons et poivrons sur les oeufs, cuire selon votre goût, moi je ' +
      'préfère une omelette un peu baveuse. Glisser l\'omelette dans une grande assiette.',
    }, {
      name: 'Hachis Parmentier',
      description: 'Hacher l\'oignon et l\'ail. Les faire revenir dans le beurre jusqu\'à ce qu\'ils ' +
      'soient tendres. Ajouter les tomates coupées en dés, la viande hachée, la farine, du sel, du poivre ' +
      'et les herbes de Provence. Quand tout est cuit, couper le feu et ajouter le jaune d\'oeuf et un peu ' +
      'de parmesan. Bien mélanger. Préchauffer le four à 200°C (thermostat 6-7). Etaler au fond du plat à ' +
      'gratin. Préparer la purée. L\'étaler au dessus de la viande. Saupoudrer de fromage râpé et faire ' +
      'gratiner.',
    }, {
      name: 'Purée de patates douces et châtaignes',
      description: 'Mettre une grande quantité d\'eau salé à bouillir. Pendant ce temps, éplucher les ' +
      'patates douces et les couper en gros morceaux. Les mettre à cuire pendant 20 minutes. Une fois ' +
      'que les morceaux sont bien tendres, les écraser au presse-purée avec les marrons et la crème. ' +
      'Rectifier l\'assaisonnement et servir chaud.',
    }, {
      name: 'Galettes de Polenta',
      description: 'Dans une casserole, faire bouillir le lait. Saler et poivrer. Ajouter en pluie la ' +
      'polenta, laisser sur feu doux. Remuer jusqu\'à ce que la préparation se détache de la paroi pendant ' +
      '5 min. Ajouter le parmesan. Laisser tiédir. Modeler la préparation en forme de galette ou bâtonnet ' +
      'sur une plaque. Laisser refroidir Faire dorer à la dernière minute dans une poêle. Servez.',
    }, {
      name: 'Gratin de cœurs d’artichauts au bleu',
      description: 'Rincer les cœurs d\'artichauts sous l\'eau froide puis les égoutter. Les couper en ' +
      'morceaux. Mixer le roquefort avec la crème fraîche jusqu\'à obtenir une texture sans morceaux. ' +
      'Saler et poivrer. Mettre l\'artichaut à cuire dans une poêle avec l\'huile d\'olive. Laisser cuire ' +
      '5 minutes à feu moyen en mélangeant régulièrement. Préchauffer le gril du four. Mettre les ' +
      'artichauts dans un mixer jusqu\'à obtenir une purée grossière. Rectifier l\'assaisonnement. Mettre ' +
      'cette purée dans un plat à gratin beurré (ou des plats individuels) puis ajouter la préparation ' +
      'au fromage. Faire dorer légèrement au four et servir aussitôt.',
    }, {
      name: 'Clafoutis tomates cerises et fromage de chèvre',
      description: 'Préchauffer le four thermostat 7 (210°C). Laver les tomates cerises (vous pouvez ' +
      'les équeuter selon la texture et la présentation souhaitée). Dans un saladier, écraser le chèvre à ' +
      'la fourchette. Ajouter le lait, la crème, les œufs battus. Bien mélanger (en fonction de la texture ' +
      'souhaitée, vous pouvez ajouter les tomates à ce moment-là et mixer la préparation). Ajouter la farine ' +
      'petit à petit et mélanger jusqu\'à obtenir une texture lisse et sans morceaux. Assaisonner selon votre ' +
      'goût avec le sel, le poivre et les herbes. Dans un plat beurré allant au four, mettre l\'appareil ' +
      '(disposer les tomates cerises selon la présentation souhaitée). Cuire au four pendant environ 40 ' +
      'minutes (selon la taille de votre plat et votre four). Servir chaud.',
    }, {
      name: 'Oeufs chipolatas et sauce tomates',
      description: 'Piquer la chipolatas et les faire griller à feu doux. Faire chauffer dans une ' +
      'casserole la purée de tomates. Saler, poivrer et ajouter le piment. Faire fondre la margarine dans ' +
      'une poêle, y faire cuire les œufs sur le plat. Disposer sur chaque assiette un œuf et une chipolata ' +
      'et entourer d’un cordon de sauce tomate.',
    }, {
      name: 'Tomates farcies au chèvre chaud',
      description: 'Faire revenir les lardons et les champignons dans une poêle. Couper le dessus des ' +
      'tomates et les vider. Couper le fromage de chèvre en petits morceaux. Mélanger les champignons, ' +
      'les lardons et le fromage de chèvre, remplir les tomates avec cette mixture. Ajouter des herbes de ' +
      'provence. Remettre à leur place le dessus des tomates et mettre au four (210°C/thermostat 7) pendant ' +
      '35 minutes.',
    }, {
      name: 'Poivron jaune farci à l\'aubergine',
      description: 'Laver les poivrons, les placer sur la grille du four pendant une dizaine de minutes à ' +
      '200°C. Pendant ce temps, préparer la farce. Dans une casserole, faire revenir dans l\'huile les ' +
      'échalotes et l\'ail coupés en petits morceaux. Y ajouter l\'aubergine pelée et coupée en petits cubes. ' +
      'Rajouter les tomates coupées en dés et sans la peau. Saler, poivrer, ajouter du piment et des herbes ' +
      'de Provence. Rajouter le jambon détaillé en petites lamelles. Enlever les poivrons du four (ils sont ' +
      'ramollis). Y pratiquer une ouverture suffisante pour pouvoir les farcir. Enlever les pépins et les ' +
      'filaments blancs. Farcir les poivrons du mélange de légumes et les placer dans un plat allant au four. ' +
      'Environ 40 à 45 mn à 200°C (thermostat 6/7).',
    }, {
      name: 'Gratin de courgettes',
      description: 'Emincer les oignons. Les faire fondre dans le beurre. Râper les courgettes avec leur ' +
      'peau. Les ajouter aux oignons. Préchauffer le four à 200°C (thermostat 6-7). Mélanger le gruyère râpé, ' +
      'les oeufs, la crème fraîche, puis saler et poivrer.  Mettre les courgettes dans un plat et verser par ' +
      'dessus la sauce et faire à four chaud pendant 15 min.',
    }, {
      name: 'Gratin de poisson',
      description: 'Faire décongeler les tranches de poisson et les mettre sur du papier absorbant pour ' +
      'enlever l\'excédent d\'eau. Laisser de côté (en enlevant le papier absorbant). Couper les pommes de ' +
      'terres, les tomates et l\'oignon en tranches fines. Mettre un filet d\'huile dans un plat à gratin. ' +
      'Disposer une couche de pommes de terres, puis les 4 tranches de poisson. Saler, poivrer. Recouvrir ' +
      'de tranches de tomates et des pommes de terres restantes, puis disposer les oignons tranchés. Saler ' +
      'et poivrer légèrement puis rajouter le thym et le laurrier. Arroser du jus de citron et d\'un filet ' +
      'd\'huile d\'olive. Enfourner dans un four préchauffé à 250°C. Laisser cuire environ 30 mn à 250°C, ' +
      'puis réduire le thermostat à 200°C jusqu\'à la fin du temps de cuisson. Surveiller la cuisson de ' +
      'temps en temps pour ne pas que les oignons noircissent trop.',
    }, {
      name: 'Risotto aux poireaux',
      description: 'Emincer le blanc des poireaux. Faire fondre le beurre dans une casserole ou une ' +
      'sauteuse à revêtement anti adhésif. Mettre les poireaux à étuver sans qu\'ils brunissent (5 mn ' +
      'environ). Ajouter le riz. Remuer et laisser le riz devenir translucide sur feu vif. Ajouter le vin ' +
      'blanc et attendre qu\'il s\'évapore. Ajouter le bouillon, baisser le feu, et attendre qu\'il soit ' +
      'totalement absorbé (environ 20 mn).A la fin, ajouter la crème fraîche, du poivre et du parmesan ' +
      'râpé. Remuer la préparation, puis la laisser reposer 3 mn hors du feu, avec un couvercle. Goûter ' +
      'pour vérifier s\'il est nécessaire de saler (le bouillon et le fromage l\'étant déjà). Servir bien chaud.',
    }, {
      name: 'Chili con carne',
      description: 'Hacher oignon et ail. Faire chauffer l\'huile dans une cocotte, faire fondre ' +
      'l\'oignon et l\'ail. Ajouter la viande hachée, la laisser prendre couleur. Ajouter la poudre a ' +
      'chili (suivant les goûts, + ou - pimenté). Egoutter les haricots, les versez dans la cocotte avec ' +
      'les tomates. Remuer et assaisonner. Laisser frémir 20 minutes. Déguster.',
    }];

    return entityUtils.createInOrder(app.models.dish, dishes);
  },
};
