'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const dishes = [{
      name: 'Blanquette de veau à l\'ancienne',
      description: 'Faire revenir les morceaux de veau avec l\'huile dans une cocotte.<br>Éplucher les ' +
      'carottes, les laver, les couper en rondelles.<br>Les ajouter au veau.<br>Mouiller la viande avec de ' +
      'l\'eau jusqu\'à recouvrir la viande.<br>Ajouter le bouquet garni, le sel et le poivre.<br>Couvrir et ' +
      'cuire à feu doux environ 1 heure.<br>Après cuisson, réserver la viande au chaud.<br>Prélever une petite ' +
      'louche de bouillon pour diluer la farine petit à petit.<br>Verser dans la cocotte, faire épaissir à ' +
      'petit bouillon.<br>Ajouter la crème et jaune d\'oeuf: la sauce doit être onctueuse.<br>Servir la viande ' +
      'nappée de sauce.',
    }, {
      name: 'Flan de poisson au coulis de tomate',
      description: 'Pocher les filets de poisson dans le courtbouillon.<br>Les émietter en enlevant les ' +
      'arêtes.<br>Dans un saladier, mélanger la farine, le lait, les oeufs, le fromage râpé, le poisson ' +
      'émietté et une pincée de sel.<br>Verser le tout dans un petit moule à cake, et enfourner au four ' +
      'préchauffé (th. 6 - 180 °C°) pendant 20 min.<br>Server nappé d\'un coulis de tomates "maison" ou du ' +
      'commerce.',
    }, {
      name: 'Crème de brocolis béchamel',
      description: 'Faire cuire les brocolis.<br>Faire un roux blanc :<br>faire fondre le beurre, ajouter la ' +
      'fleur de maïs dès que le beurre est fondu.<br>Mélanger avec une spatule en bois pour obtenir un mélange ' +
      'riche et homogène.<br>Laisser hors du feu.<br>Ajouter le lait en poudre au lait et faire chauffer le tout. ' +
      'Le mélanger au roux à l\'aide d\'un fouet.<br>Faire chauffer la sauce à feu doux en remuant sans cesse ' +
      'avec la spatule jusqu\'à épaississement.<br>Mixer les légumes et incorporer la sauce Béchamel.<br>Ajouter ' +
      'si nécessaire de la crème fraîche.',
    }, {
      name: 'Soupe de lentilles au lard',
      description: 'Portez l\'eau à ébullition et mettez-y à cuire les lentilles, les oignons et les ' +
      'carottes avec le bouquet garni pendant 30 minutes - ou faites cuire 15 minutes à l\'autocuiseur. ' +
      '<br>Si la soupe est trop épaisse en fin de cuisson, ajoutez un peu d\'eau.<br>Ôtez le bouquet garni, et, ' +
      'selon votre convenance, mixez ou pas la soupe.<br>Faites revenir les lardons à la poêle, sans matière ' +
      'grasse.<br>Jetez-les dans la soupe et servez.',
    }, {
      name: 'Gratin de pâtes aux épinards et à la tomate',
      description: 'Faites cuire les pâtes puis égouttez-les.<br>Tapissez le plat à gratin graissé avec ' +
      'les tomates au naturel ou en rondelles et les oignons émincés.<br>Recouvrez avec les pâtes puis par ' +
      'une couche d\'épinards et l\'ail écrasé.<br>Versez la crème, salez et poivrez.<br>Saupoudrez avec le ' +
      'parmesan.<br>Mettez au four à 200 °C pendant 15 minutes et servez aussitôt.',
    }, {
      name: 'Filets de merlan aux poireaux',
      description: 'Lavez les légumes.<br>Pelez la carotte et coupez la en petits bâtonnets.<br>Coupez les ' +
      'poireaux en rondelles et faites-les cuire à l\'étouffée.<br>Faites revenir l\'oignon émincé dans l\'huile. ' +
      'Dans un plat à gratin, répartissez lescarottes et les poireaux, puis déposez-y les filets de merlan ' +
      'et enfin les oignons.<br>Arrosez avec le vin blanc, assaisonnez et parsemez le tout d\'emmental râpé. ' +
      '<br>Passez au four 30 minutes à 240 °C (thermostat 8).<br>Saupoudrez de persil.',
    }, {
      name: 'Lapin à la normande',
      description: 'Dans une cocotte, faites revenir le râble de lapin de chaque côté dans un peu ' +
      'd\'huile.<br>Épluchez oignons, ail et  pommes.<br>Émincez-les et ajoutez-les au fur et à mesure dans ' +
      'la cocotte.<br>Versez le cidre, salez, poivrez, couvrez et laissez mijoter 1 heure.<br>Avant de servir, ' +
      'incorporez la crème dans la cocotte et remuez pendant 1 minute.',
    }, {
      name: 'Papillote de cabillaud',
      description: 'Mettez le poisson dans du papier sulfurisé.<br>Recouvrez-le de la tomate coupée en ' +
      'rondelles, de l\'échalote émincée, du thym et du persil ciselé.<br>Salez, poivrez et arrosez avec ' +
      'l\'huile d\'olive.<br>Fermez la papillote.<br>Enfournez au micro-ondes à puissance maximale pendant ' +
      'environ 10 minutes.',
    }, {
      name: 'Gratin de potiron',
      description: 'Nettoyez la tranche de potiron, coupez-la en petits morceaux.<br>Faites cuire environ ' +
      '10 minutes dans de l\'eau bouillante, puis rafraîchissez sous un filet d\'eau froide et égouttez. ' +
      '<br>Faites fondre les oignons émincés dans une poêle.<br>Dans un plat à gratin frotté d\'une gousse d\'ail, ' +
      'disposez des couches alternées d\'oignon et de potiron, assaisonnez puis recouvrez de fromage râpé ' +
      'et passez au four 15 minutes.',
    }, {
      name: 'Roulé de volaille au jambon cru',
      description: 'Aplatir les filets de volaille au rouleau à pâtisserie si besoin.<br>Dans un bol, ' +
      'écraser le fromage et mélanger avec les pignons, les tomates séchées et les herbes fraîches, le tout ' +
      'finement hachés.<br>Répartir cette garniture sur les filets de volaille, en formant une bande.<br>Rouler ' +
      'les filets autour de cette bande et faire tenir en enroulant autour une tranche de jambon ' +
      'cru.<br>Cuire au four à 200 °C pendant 20 minutes environ.<br>Servir chaud, tiède ou froid (découpés en ' +
      'tranches).',
    }, {
      name: 'Boulettes d\'agneau sauce Yaourt au Cumin',
      description: 'Mixer les échalotes ou oignons et le persil.<br>Ajoutez-y la viande hachée, les épices, ' +
      'sel et poivre.<br>Mélanger le tout et former des petites boulettes.<br>Graisser la poêle avec un sopalin ' +
      'huilé et faire dorer les boulettes quelques minutes.<br>Mélanger le yaourt avec le cumin, le sel et le ' +
      'poivre.<br>Servir les boulettes chaudes avec la sauce au yaourt.',
    }, {
      name: 'Omellette aux poivrons',
      description: 'Faire chauffer l\'huile dans une poêle, couper les oignons en lamelles, les ajouter ' +
      'à l\'huile.<br>Epépiner le poivron, le couper en petits dés, l\'ajouter à l\'oignon.<br>Laisser suer à feu ' +
      'doux pendant 30 min environ, les oignons et les poivrons doivent être cuits.<br>Faire chauffer un peu ' +
      'd\'huile dans une autre poêle de taille moyenne à feu vif, battre les œufs dans un bol, verser dans ' +
      'la seconde poêle.<br>Verser les oignons et poivrons sur les oeufs, cuire selon votre goût. ' +
      '<br>Glisser l\'omelette dans une grande assiette.',
    }, {
      name: 'Hachis Parmentier',
      description: 'Hacher ail et oignons.<br>Les faire revenir dans le beurre jusqu\'à ce qu\'ils ' +
      'soient tendres.<br>Ajouter les tomates coupées en dés, la viande hachée, la farine, du sel, du poivre ' +
      'et les herbes de Provence.<br>Quand tout est cuit, couper le feu et ajouter le jaune d\'oeuf et un peu ' +
      'de parmesan.<br>Bien mélanger.<br>Préchauffer le four à 200°C (thermostat 6-7).<br>Etaler au fond du plat à ' +
      'gratin.<br>Préparer la purée.<br>L\'étaler au dessus de la viande.<br>Saupoudrer de fromage râpé et faire ' +
      'gratiner.',
    }, {
      name: 'Purée de patates douces et châtaignes',
      description: 'Mettre une grande quantité d\'eau salé à bouillir.<br>Pendant ce temps, éplucher les ' +
      'patates douces et les couper en gros morceaux.<br>Les mettre à cuire pendant 20 minutes.<br>Une fois ' +
      'que les morceaux sont bien tendres, les écraser au presse-purée avec les marrons et la crème. ' +
      '<br>Rectifier l\'assaisonnement et servir chaud.',
    }, {
      name: 'Galettes de Polenta',
      description: 'Dans une casserole, faire bouillir le lait.<br>Saler et poivrer.<br>Ajouter en pluie la ' +
      'polenta, laisser sur feu doux.<br>Remuer jusqu\'à ce que la préparation se détache de la paroi pendant ' +
      '5 min.<br>Ajouter le parmesan.<br>Laisser tiédir.<br>Modeler la préparation en forme de galette ou bâtonnet ' +
      'sur une plaque.<br>Laisser refroidir Faire dorer à la dernière minute dans une poêle.<br>Servez.',
    }, {
      name: 'Gratin de cœurs d\'artichauts au bleu',
      description: 'Rincer les cœurs d\'artichauts sous l\'eau froide puis les égoutter.<br>Les couper en ' +
      'morceaux.<br>Mixer le roquefort avec la crème fraîche jusqu\'à obtenir une texture sans morceaux. ' +
      '<br>Saler et poivrer.<br>Mettre l\'artichaut à cuire dans une poêle avec l\'huile d\'olive.<br>Laisser cuire ' +
      '5 minutes à feu moyen en mélangeant régulièrement.<br>Préchauffer le gril du four.<br>Mettre les ' +
      'artichauts dans un mixer jusqu\'à obtenir une purée grossière.<br>Rectifier l\'assaisonnement.<br>Mettre ' +
      'cette purée dans un plat à gratin beurré (ou des plats individuels) puis ajouter la préparation ' +
      'au fromage.<br>Faire dorer légèrement au four et servir aussitôt.',
    }, {
      name: 'Clafoutis tomates cerises et fromage de chèvre',
      description: 'Préchauffer le four thermostat 7 (210°C).<br>Laver les tomates cerises (vous pouvez ' +
      'les équeuter selon la texture et la présentation souhaitée).<br>Dans un saladier, écraser le chèvre à ' +
      'la fourchette.<br>Ajouter le lait, la crème, les œufs battus.<br>Bien mélanger (en fonction de la texture ' +
      'souhaitée, vous pouvez ajouter les tomates à ce moment-là et mixer la préparation).<br>Ajouter la farine ' +
      'petit à petit et mélanger jusqu\'à obtenir une texture lisse et sans morceaux.<br>Assaisonner selon votre ' +
      'goût avec le sel, le poivre et les herbes.<br>Dans un plat beurré allant au four, mettre l\'appareil ' +
      '(disposer les tomates cerises selon la présentation souhaitée).<br>Cuire au four pendant environ 40 ' +
      'minutes (selon la taille de votre plat et votre four).<br>Servir chaud.',
    }, {
      name: 'Oeufs chipolatas et sauce tomates',
      description: 'Piquer la chipolatas et les faire griller à feu doux.<br>Faire chauffer dans une ' +
      'casserole la purée de tomates.<br>Saler, poivrer et ajouter le piment.<br>Faire fondre la margarine dans ' +
      'une poêle, y faire cuire les œufs sur le plat.<br>Disposer sur chaque assiette un œuf et une chipolata ' +
      'et entourer d\'un cordon de sauce tomate.',
    }, {
      name: 'Tomates farcies au chèvre chaud',
      description: 'Faire revenir les lardons et les champignons dans une poêle.<br>Couper le dessus des ' +
      'tomates et les vider.<br>Couper le fromage de chèvre en petits morceaux.<br>Mélanger les champignons, ' +
      'les lardons et le fromage de chèvre, remplir les tomates avec cette mixture.<br>Ajouter des herbes de ' +
      'provence.<br>Remettre à leur place le dessus des tomates et mettre au four (210°C/thermostat 7) pendant ' +
      '35 minutes.',
    }, {
      name: 'Poivron jaune farci à l\'aubergine',
      description: 'Laver les poivrons, les placer sur la grille du four pendant une dizaine de minutes à ' +
      '200°C.<br>Pendant ce temps, préparer la farce.<br>Dans une casserole, faire revenir dans l\'huile les ' +
      'échalotes et l\'ail coupés en petits morceaux.<br>Y ajouter l\'aubergine pelée et coupée en petits cubes. ' +
      '<br>Rajouter les tomates coupées en dés et sans la peau.<br>Saler, poivrer, ajouter du piment et des herbes ' +
      'de Provence.<br>Rajouter le jambon détaillé en petites lamelles.<br>Enlever les poivrons du four (ils sont ' +
      'ramollis).<br>Y pratiquer une ouverture suffisante pour pouvoir les farcir.<br>Enlever les pépins et les ' +
      'filaments blancs.<br>Farcir les poivrons du mélange de légumes et les placer dans un plat allant au four. ' +
      'Environ 40 à 45 mn à 200°C (thermostat 6/7).',
    }, {
      name: 'Gratin de courgettes',
      description: 'Emincer les oignons.<br>Les faire fondre dans le beurre.<br>Râper les courgettes avec leur ' +
      'peau.<br>Les ajouter aux oignons.<br>Préchauffer le four à 200°C (thermostat 6-7).<br>Mélanger le gruyère râpé, ' +
      'les oeufs, la crème fraîche, puis saler et poivrer.<br>Mettre les courgettes dans un plat et verser par ' +
      'dessus la sauce et faire à four chaud pendant 15 min.',
    }, {
      name: 'Gratin de poisson',
      description: 'Faire décongeler les tranches de poisson et les mettre sur du papier absorbant pour ' +
      'enlever l\'excédent d\'eau.<br>Laisser de côté (en enlevant le papier absorbant).<br>Couper les pommes de ' +
      'terres, les tomates et les oignons en tranches fines.<br>Mettre un filet d\'huile dans un plat à gratin. ' +
      'Disposer une couche de pommes de terres, puis les tranches de poisson.<br>Saler, poivrer.<br>Recouvrir ' +
      'de tranches de tomates et des pommes de terres restantes, puis disposer les oignons tranchés.<br>Saler ' +
      'et poivrer légèrement puis rajouter le thym et le laurrier.<br>Arroser du jus de citron et d\'un filet ' +
      'd\'huile d\'olive.<br>Enfourner dans un four préchauffé à 250°C.<br>Laisser cuire environ 30 mn à 250°C, ' +
      'puis réduire le thermostat à 200°C jusqu\'à la fin du temps de cuisson.<br>Surveiller la cuisson de ' +
      'temps en temps pour ne pas que les oignons noircissent trop.',
    }, {
      name: 'Risotto aux poireaux',
      description: 'Emincer le blanc des poireaux.<br>Faire fondre le beurre dans une casserole ou une ' +
      'sauteuse à revêtement anti adhésif.<br>Mettre les poireaux à étuver sans qu\'ils brunissent (5 mn ' +
      'environ).<br>Ajouter le riz.<br>Remuer et laisser le riz devenir translucide sur feu vif.<br>Ajouter le vin ' +
      'blanc et attendre qu\'il s\'évapore.<br>Ajouter le bouillon, baisser le feu, et attendre qu\'il soit ' +
      'totalement absorbé (environ 20 mn).<br>A la fin, ajouter la crème fraîche, du poivre et du parmesan ' +
      'râpé.<br>Remuer la préparation, puis la laisser reposer 3 mn hors du feu, avec un couvercle.<br>Goûter ' +
      'pour vérifier s\'il est nécessaire de saler (le bouillon et le fromage l\'étant déjà).<br>Servir bien chaud.',
    }, {
      name: 'Chili con carne',
      description: 'Hacher oignon et ail.<br>Faire chauffer l\'huile dans une cocotte, faire fondre ' +
      'l\'oignon et l\'ail.<br>Ajouter la viande hachée, la laisser prendre couleur.<br>Ajouter la poudre a ' +
      'chili (suivant les goûts, + ou - pimenté).<br>Egoutter les haricots, les versez dans la cocotte avec ' +
      'les tomates.<br>Remuer et assaisonner.<br>Laisser frémir 20 minutes.<br>Déguster.',
    }];

    return entityUtils.createInOrder(app.models.dish, dishes);
  },
};
