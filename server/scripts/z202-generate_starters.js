'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const starters = [{
      name: 'Concombre mimosa',
      description: '<ul><li>Peler et découper les concombres en rondelles.</li><li>Préparez la vinaigrette avec l\'huile, ' +
      'le vinaigre, le sel et le poivre.</li><li>Faire cuire les œufs durs, les hacher dans le presse-ail ou les écraser ' +
      'avec une fourchette et les ajouter aux rondelles de concombre.</li></ul>',
    }, {
      name: 'Bruschettas tomates-Basilic',
      description: '<ul><li>Disposer les tranches de pain sur une plaque tapissée de papier sulfurisé et les faire ' +
      'griller 2 min sous le gril du four.</li><li>Laisser refroidir hors du four.</li><li>Pendant ce temps, couper les tomates ' +
      'en deux, les épépiner puis couper en dés.</li><li>Peler les gousses d\'ail, les frotter généreusement sur les ' +
      'tranches de pain grillées puis napper d\'un filet d\'huile d\'olive.</li><li>Répartir les dés de tomate et le basilic' +
      'ciselé.</li><li>Arroser les bruschettas avec un filet de jus de citron vert.</li><li>Saler et poivrer. ',
    }, {
      name: 'Betteraves mimosa',
      description: '<ul><li>Déposer les œufs dans une casserole d\'eau.</li><li>Porter à ébullition et laisser cuire 10 min ' +
      'pour qu\'ils deviennent durs.</li><li>Pendant ce temps, couper les betteraves en petits cubes.</li><li>Sortir les œufs de ' +
      'la casserole avec une écumoire et les passer sous l\'eau froide.</li><li>Napper les betteraves de la ' +
      'vinaigrette préparée avec les huiles, le vinaigre, le sel et le poivre.</li><li>Ajouter les œufs durs ' +
      'préalablement écalés et écrasés à la fourchette.</li></ul>',
    }, {
      name: 'Carpaccio de courgettes au parmesan',
      description: '<ul><li>Laver les courgettes sans les éplucher, les essuyer puis les couper en tranches ' +
      'fines à l\'aide d\'un robot ou d\'une mandoline.</li><li>Les disposer sur les assiettes et ajouter les copeaux ' +
      'de parmesan.</li><li>Verser le jus de citron dans un bol, saler, poivrer et émulsionner avec l\'huile.</li><li>Verser ' +
      'la sauce sur les courgettes puis placer au réfrigérateur pour environ 1 h.</li><li>Faire légèrement griller ' +
      'les pignons de pin dans une petite poêle sans matière grasse.</li><li>Les parsemer sur les courgettes, ajouter ' +
      'le basilic ciselé et servir.</li></ul>',
    }, {
      name: 'Carottes rapées',
      description: '<ul><li>Laver, peler et râper les carottes.</li><li>Faire une vinaigrette en mélangeant l\'huile, le ' +
      'jus du citron, le sel et le poivre.</li><li>Verser la vinaigrette sur les carottes.</li><li>Parsemer de persil haché.</li></ul>',
    }, {
      name: 'Potage de légumes',
      description: '<ul><li>Éplucher et laver les légumes, puis les couper en morceaux.</li><li>Dans un faitout, recouvrir ' +
      'les légumes d\'eau avec une pincée de sel et faire cuire 30 min.</li><li>Mixer le potage avec la crème de ' +
      'gruyère.</li><li>Ajouter le lait en poudre, les jaunes d\'oeuf, la crème fraîche et mélanger le tout au fouet. ' +
      '</li><li>Servir bien chaud.</li></ul>',
    }, {
      name: 'Artichaut vinaigrette',
      description: '<ul><li>Commencer par casser les queues des artichauts.</li><li>Couper à ras le dessous et enlever les plus ' +
      'grosses feuilles sur l\'extérieur des artichauts car même cuites elles restent dures et indigestes. ' +
      '</li><li>Cuisson des artichauts :</li><li>Remplissez une grande marmite d\'eau.</li><li>Ajouter le gros sel (ou sel ' +
      'fin par défaut).</li><li>Laisser cuire environ 30 à 40 minutes selon la grosseur des artichauts.</li><li>Les artichauts ' +
      'sont cuits lorsque les feuilles se détachent facilement.</li><li>Égoutter les artichauts tête en bas dans une ' +
      'passoire.' +
      '</li><li>Préparation de la vinaigrette :</li><li>Mélanger l\'huile d\'olive, le vinaigre, la moutarde.</li><li>Ajouter les ' +
      'échalotes ciselées.</li><li>Ajouter la ciboulette ciselée.</li><li>Saler, poivrer. Servir les artichaut tel quel, ' +
      'comme sur la photo.</li><li>Vous pourrez mettre de la vinaigrette en décoration mais prévoir à côté un petit ' +
      'ramequin rempli de vinaigrette par personne.</li></ul>',
    }, {
      name: 'Caviar d\'aubergines',
      description: '<ul><li>Préchauffez votre four à 200°C.</li><li>Nettoyez les aubergines et ouvrez-les en 2 dans le sens de ' +
      'la longueur.</li><li>Déposez-les sur une plaque de cuisson recouverte de papier sulfurisé.</li><li>Incisez les ' +
      'légèrement, salez, poivrez.</li><li>Recouvrir avec les gousses d\'ail dégermées coupées en petits dés.</li><li>Déposer le ' +
      'thym et arrosez d\'un peu d\'huile d\'olive.</li><li>Au bout de 30 à 40 minutes, vos aubergines doivent être ' +
      'cuites, toutes ratatinées.</li><li>Avec une cuillère retirez la chair des aubergines.</li><li>Mixez la pour obtenir une ' +
      'purée fine.</li><li>Ajoutez le jus de citron et montez à l\'huile d\'olive jusqu\'à obtenir la consistance ' +
      'souhaitée.</li><li>Goûtez, rectifiez l\'assaisonnement si besoin.</li></ul>',
    }, {
      name: 'Rillettes de thon au basilic',
      description: '<ul><li>Egoutter le thon et l\'émietter à la fourchette.</li><li>Ajouter dans l\'ordre les petits ' +
      'suisses, la crème fraîche, la moutarde, le jus de citron, le basilic, sel et poivre.</li><li>Mélanger.</li><li>Placer ' +
      'au frigo au moins une demi-heure et saupouder de paprika au moment de servir.</li></ul>',
    }, {
      name: 'Salade de courgettes à la feta',
      description: '<ul><li>Couper les courgettes en fines rondelles, et les faire dégorger avec du gros sel dans ' +
      'une passoire environ 30 min (jusqu\'à ce qu\'elles soient tendres).</li><li>Pendant ce temps, couper la feta ' +
      'en petits cubes, couper les tomates en petits quartiers, couper les oignons en petit quartier et faites ' +
      'les blanchir à l\'eau salée 2 min.</li><li>Mettre les courgettes avec la feta, les tomates, les oignons, les ' +
      'olives dans un saladier, ajouter le basilic.</li><li>Mélanger avec l\'huile d\'olive.</li></ul>',
    }, {
      name: 'Oeufs cocotte',
      description: '<ul><li>Faire préchauffer le four à 240°C (thermostat 8).</li><li>Beurrer les ramequins.Couper les ' +
      'tranches de bacon en lanières (une tranche par ramequin) et les déposer dans le fond des ramequins. ' +
      '</li><li>Casser un oeuf dans chaque ramequin, déposer une ou deux cuillères à café de crème fraîche sur les ' +
      'oeufs puis recouvrir de gruyère râpé.</li><li>Mettre une noisette de beurre sur chaque ramequin et enfourner ' +
      'pendant 10 à 15 minutes.</li><li>A déguster chaud.</li></ul>',
    }, {
      name: 'Salade Melon Jambon',
      description: '<ul><li>Dans un saladier verser l\'huile d\'olive, le vinaigre balsamique et les feuilles de menthe coupées ' +
      'en petits morceaux.</li><li>Ajouter les ingrédients suivant au fur et à mesure pour qu\'ils s\'imprègnent bien ' +
      'de la vinaigrette:</li><li>Couper les tomates en tout petits dés d\'1 à 2 cm.</li><li>Couper la feta en petits dés  ' +
      'et les tranches de jambon en morceaux correspondants à une bouchée (avec des ciseaux c\'est plus facile qu\'avec ' +
      'un couteau.);</li><li>Ôter les pépins du melon puis le couper en petits cubes.</li><li>Bien mélanger le tout et laisser ' +
      'reposer au frigo si possible une demie-heure.</li></ul>',
    }, {
      name: 'Salade de pommes de terre',
      description: '<ul><li>Faites cuire les pommes de terre.</li><li>Egouttez-les et coupez-les en rondelles, ajoutez ' +
      'les oignons rouges coupés en dés, les cornichons coupés en rondelles et de la mayonnaise.</li><li>Dégustez bien ' +
      'frais.</li></ul>',
    }, {
      name: 'Coleslow',
      description: '<ul><li>Râper chou et carottes dans un saladier.</li><li>Mélanger fromage blanc et mayonnaise, ' +
      'puis ajouter vinaigre, sel, sucre et ciboulette.</li><li>Ajouter au mélange chou / carottes et mêler ' +
      'intimement.</li><li>Mettre au frais et déguster.</li></ul>',
    }, {
      name: 'Flan aux carottes',
      description: '<ul><li>Faire revenir les carottes coupées en lamelles dans un peu de beurre.</li><li>Bien laisser ' +
      'évaporer.</li><li>Mixer les carottes et ajouter tout le reste.</li><li>Verser dans un ramequin beurré et cuire au ' +
      'bain-marie à four moyen pendant 35 minutes (vérifier la cuisson avec la pointe d\'un couteau).</li></ul>',
    }, {
      name: 'Salade de coeur de palmier au surimi',
      description: '<ul><li>Égoutter les cœurs de palmier.</li><li>Les couper en petits tronçons d\'environ 2 cm.</li><li>Couper ' +
      'également les bâtonnets de surimi en tronçons de 2 cm.</li><li>Verser le tout dans un saladier, arroser de jus ' +
      'de citron et ajouter la mayonnaise.</li><li>Parsemer de persil ciselé et assaisonner.</li></ul>',
    }, {
      name: 'Salade au maïs et champignons de paris en vinaigrette',
      description: '<ul><li>Nettoyer et couper les champignons en quatre.</li><li>Égoutter le maïs.</li><li>Dans un saladier, ' +
      'confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le poivre. ' +
      '</li><li>Émulsionner avec l\'huile et le fromage blanc.</li><li>Ajouter les champignons et le maïs puis mélanger.</li></ul>',
    }, {
      name: 'Salade de courgettes croquantes au maïs',
      description: '<ul><li>Nettoyer les courgettes et les couper en fines lamelles.</li><li>Égoutter le maïs.</li><li>Dans un ' +
      'saladier, confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le ' +
      'poivre.</li><li>Émulsionner avec l\'huile.</li><li>Ajouter les courgettes et le maïs, mélanger et servir frais.</li></ul>',
    }, {
      name: 'Soufflé au fromage',
      description: '<ul><li>Préchauffez votre four à th.6 (180°C).</li><li>Dans une casserole, faites un roux en faisant ' +
      'fondre le beurre et en y ajoutant la farine.</li><li>Mélangez bien, jusqu\'à ce que le beurre soit totalement ' +
      'absorbé.</li><li>Ajoutez ensuite le lait en continuant à mélanger.</li><li>Lorsque le mélange s\'épaissit et commence à ' +
      'avoir la texture d\'une béchamel, ajoutez le sel, le poivre et la muscade.</li><li>Ajoutez les jaunes d\'œufs ' +
      '(gardez bien les blancs) l\'un après l\'autre, en tournant toujours, puis le gruyère râpé.</li><li>Battez les ' +
      'blancs en neige très fermes.</li><li>Ajoutez-les délicatement à votre préparation, au dernier moment. Beurrez ' +
      'et farinez le moule à soufflé (ou plusieurs petits) et remplissez-le jusqu\'à moitié.</li><li>Enfournez pendant ' +
      '25 min environ.</li><li>Quand le soufflé gonfle et déborde légèrement du moule, servez aussitôt.</li></ul>',
    }, {
      name: 'Saumon à la mousse de courgettes',
      description: '<ul><li>Rincer, essorer et ciseler l\'aneth et la menthe.</li><li>Peler et émincer l\'ail. ' +
      'Râper les courgettes. Les faire revenir dans 1 cuillère à soupe d\'huile d\'olive avec l\'ail émincé et ' +
      'les herbes ciselées.</li><li>Assaisonner (mais pas trop, attention au saumon fumé).</li><li>Réserver et laisser un peu ' +
      'refroidir.</li><li>Battre les oeufs et la crème en omelette.</li><li>Mélanger cette préparation avec les courgettes ' +
      'râpées et éventuellement, donner un petit coup de mixeur pour obtenir l\'aspect "mousse".</li><li>Tapisser 4 ' +
      'ramequins avec les tranches de saumon fumé.</li><li>Verser le mélange omelette-courgettes dans les ramequins ' +
      'tapissés de saumon.</li><li>Faire cuire au micro-ondes pendant 2 à 3 minutes, selon la puissance.</li></ul>',
    }];

    return entityUtils.createInOrder(app.models.starter, starters);
  },
};
