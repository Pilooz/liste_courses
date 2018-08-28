'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const starters = [{
      name: 'Concombre mimosa',
      description: 'Peler et découper les concombres en rondelles.<br>Préparez la vinaigrette avec l\'huile, ' +
      'le vinaigre, le sel et le poivre.<br>Faire cuire les œufs durs, les hacher dans le presse-ail ou les écraser ' +
      'avec une fourchette et les ajouter aux rondelles de concombre.',
    }, {
      name: 'Bruschettas tomates-Basilic',
      description: 'Disposer les tranches de pain sur une plaque tapissée de papier sulfurisé et les faire ' +
      'griller 2 min sous le gril du four.<br>Laisser refroidir hors du four.<br>Pendant ce temps, couper les tomates ' +
      'en deux, les épépiner puis couper en dés.<br>Peler les gousses d\'ail, les frotter généreusement sur les ' +
      'tranches de pain grillées puis napper d\'un filet d\'huile d\'olive.<br>Répartir les dés de tomate et le basilic' +
      'ciselé.<br>Arroser les bruschettas avec un filet de jus de citron vert.<br>Saler et poivrer. ',
    }, {
      name: 'Betteraves mimosa',
      description: 'Déposer les œufs dans une casserole d\'eau.<br>Porter à ébullition et laisser cuire 10 min ' +
      'pour qu\'ils deviennent durs.<br>Pendant ce temps, couper les betteraves en petits cubes.<br>Sortir les œufs de ' +
      'la casserole avec une écumoire et les passer sous l\'eau froide.<br>Napper les betteraves de la ' +
      'vinaigrette préparée avec les huiles, le vinaigre, le sel et le poivre.<br>Ajouter les œufs durs ' +
      'préalablement écalés et écrasés à la fourchette.',
    }, {
      name: 'Carpaccio de courgettes au parmesan',
      description: 'Laver les courgettes sans les éplucher, les essuyer puis les couper en tranches ' +
      'fines à l\'aide d\'un robot ou d\'une mandoline.<br>Les disposer sur les assiettes et ajouter les copeaux ' +
      'de parmesan.<br>Verser le jus de citron dans un bol, saler, poivrer et émulsionner avec l\'huile.<br>Verser ' +
      'la sauce sur les courgettes puis placer au réfrigérateur pour environ 1 h.<br>Faire légèrement griller ' +
      'les pignons de pin dans une petite poêle sans matière grasse.<br>Les parsemer sur les courgettes, ajouter ' +
      'le basilic ciselé et servir.',
    }, {
      name: 'Carottes rapées',
      description: 'Laver, peler et râper les carottes.<br>Faire une vinaigrette en mélangeant l\'huile, le ' +
      'jus du citron, le sel et le poivre.<br>Verser la vinaigrette sur les carottes.<br>Parsemer de persil haché.',
    }, {
      name: 'Potage de légumes',
      description: 'Éplucher et laver les légumes, puis les couper en morceaux.<br>Dans un faitout, recouvrir ' +
      'les légumes d\'eau avec une pincée de sel et faire cuire 30 min.<br>Mixer le potage avec la crème de ' +
      'gruyère.<br>Ajouter le lait en poudre, les jaunes d\'oeuf, la crème fraîche et mélanger le tout au fouet. ' +
      '<br>Servir bien chaud.',
    }, {
      name: 'Artichaut vinaigrette',
      description: 'Commencer par casser les queues des artichauts.<br>Couper à ras le dessous et enlever les plus ' +
      'grosses feuilles sur l\'extérieur des artichauts car même cuites elles restent dures et indigestes. ' +
      '<br>Cuisson des artichauts :<br>Remplissez une grande marmite d\'eau.<br>Ajouter le gros sel (ou sel ' +
      'fin par défaut).<br>Laisser cuire environ 30 à 40 minutes selon la grosseur des artichauts.<br>Les artichauts ' +
      'sont cuits lorsque les feuilles se détachent facilement.<br>Égoutter les artichauts tête en bas dans une ' +
      'passoire.' +
      '<br>Préparation de la vinaigrette :<br>Mélanger l\'huile d\'olive, le vinaigre, la moutarde.<br>Ajouter les ' +
      'échalotes ciselées.<br>Ajouter la ciboulette ciselée.<br>Saler, poivrer. Servir les artichaut tel quel, ' +
      'comme sur la photo.<br>Vous pourrez mettre de la vinaigrette en décoration mais prévoir à côté un petit ' +
      'ramequin rempli de vinaigrette par personne.',
    }, {
      name: 'Caviar d\'aubergines',
      description: 'Préchauffez votre four à 200°C.<br>Nettoyez les aubergines et ouvrez-les en 2 dans le sens de ' +
      'la longueur.<br>Déposez-les sur une plaque de cuisson recouverte de papier sulfurisé.<br>Incisez les ' +
      'légèrement, salez, poivrez.<br>Recouvrir avec les gousses d\'ail dégermées coupées en petits dés.<br>Déposer le ' +
      'thym et arrosez d\'un peu d\'huile d\'olive.<br>Au bout de 30 à 40 minutes, vos aubergines doivent être ' +
      'cuites, toutes ratatinées.<br>Avec une cuillère retirez la chair des aubergines.<br>Mixez la pour obtenir une ' +
      'purée fine.<br>Ajoutez le jus de citron et montez à l\'huile d\'olive jusqu\'à obtenir la consistance ' +
      'souhaitée.<br>Goûtez, rectifiez l\'assaisonnement si besoin.',
    }, {
      name: 'Rillettes de thon au basilic',
      description: 'Egoutter le thon et l\'émietter à la fourchette.<br>Ajouter dans l\'ordre les petits ' +
      'suisses, la crème fraîche, la moutarde, le jus de citron, le basilic, sel et poivre.<br>Mélanger.<br>Placer ' +
      'au frigo au moins une demi-heure et saupouder de paprika au moment de servir.',
    }, {
      name: 'Salade de courgettes à la feta',
      description: 'Couper les courgettes en fines rondelles, et les faire dégorger avec du gros sel dans ' +
      'une passoire environ 30 min (jusqu\'à ce qu\'elles soient tendres).<br>Pendant ce temps, couper la feta ' +
      'en petits cubes, couper les tomates en petits quartiers, couper les oignons en petit quartier et faites ' +
      'les blanchir à l\'eau salée 2 min.<br>Mettre les courgettes avec la feta, les tomates, les oignons, les ' +
      'olives dans un saladier, ajouter le basilic.<br>Mélanger avec l\'huile d\'olive.',
    }, {
      name: 'Oeufs cocotte',
      description: 'Faire préchauffer le four à 240°C (thermostat 8).<br>Beurrer les ramequins.Couper les ' +
      'tranches de bacon en lanières (une tranche par ramequin) et les déposer dans le fond des ramequins. ' +
      '<br>Casser un oeuf dans chaque ramequin, déposer une ou deux cuillères à café de crème fraîche sur les ' +
      'oeufs puis recouvrir de gruyère râpé.<br>Mettre une noisette de beurre sur chaque ramequin et enfourner ' +
      'pendant 10 à 15 minutes.<br>A déguster chaud.',
    }, {
      name: 'Salade Melon Jambon',
      description: 'Dans un saladier verser l\'huile d\'olive, le vinaigre balsamique et les feuilles de menthe coupées ' +
      'en petits morceaux.<br>Ajouter les ingrédients suivant au fur et à mesure pour qu\'ils s\'imprègnent bien ' +
      'de la vinaigrette:<br>Couper les tomates en tout petits dés d\'1 à 2 cm.<br>Couper la feta en petits dés  ' +
      'et les tranches de jambon en morceaux correspondants à une bouchée (avec des ciseaux c\'est plus facile qu\'avec ' +
      'un couteau.);<br>Ôter les pépins du melon puis le couper en petits cubes.<br>Bien mélanger le tout et laisser ' +
      'reposer au frigo si possible une demie-heure.',
    }, {
      name: 'Salade de pommes de terre',
      description: 'Faites cuire les pommes de terre.<br>Egouttez-les et coupez-les en rondelles, ajoutez ' +
      'les oignons rouges coupés en dés, les cornichons coupés en rondelles et de la mayonnaise.<br>Dégustez bien ' +
      'frais.',
    }, {
      name: 'Coleslow',
      description: 'Râper chou et carottes dans un saladier.<br>Mélanger fromage blanc et mayonnaise, ' +
      'puis ajouter vinaigre, sel, sucre et ciboulette.<br>Ajouter au mélange chou / carottes et mêler ' +
      'intimement.<br>Mettre au frais et déguster.',
    }, {
      name: 'Flan aux carottes',
      description: 'Faire revenir les carottes coupées en lamelles dans un peu de beurre.<br>Bien laisser ' +
      'évaporer.<br>Mixer les carottes et ajouter tout le reste.<br>Verser dans un ramequin beurré et cuire au ' +
      'bain-marie à four moyen pendant 35 minutes (vérifier la cuisson avec la pointe d\'un couteau).',
    }, {
      name: 'Salade de coeur de palmier au surimi',
      description: 'Égoutter les cœurs de palmier.<br>Les couper en petits tronçons d\'environ 2 cm.<br>Couper ' +
      'également les bâtonnets de surimi en tronçons de 2 cm.<br>Verser le tout dans un saladier, arroser de jus ' +
      'de citron et ajouter la mayonnaise.<br>Parsemer de persil ciselé et assaisonner.',
    }, {
      name: 'Salade au maïs et champignons de paris en vinaigrette',
      description: 'Nettoyer et couper les champignons en quatre.<br>Égoutter le maïs.<br>Dans un saladier, ' +
      'confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le poivre. ' +
      '<br>Émulsionner avec l\'huile et le fromage blanc.<br>Ajouter les champignons et le maïs puis mélanger.',
    }, {
      name: 'Salade de courgettes croquantes au maïs',
      description: 'Nettoyer les courgettes et les couper en fines lamelles.<br>Égoutter le maïs.<br>Dans un ' +
      'saladier, confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le ' +
      'poivre.<br>Émulsionner avec l\'huile.<br>Ajouter les courgettes et le maïs, mélanger et servir frais.',
    }, {
      name: 'Soufflé au fromage',
      description: 'Préchauffez votre four à th.6 (180°C).<br>Dans une casserole, faites un roux en faisant ' +
      'fondre le beurre et en y ajoutant la farine.<br>Mélangez bien, jusqu\'à ce que le beurre soit totalement ' +
      'absorbé.<br>Ajoutez ensuite le lait en continuant à mélanger.<br>Lorsque le mélange s\'épaissit et commence à ' +
      'avoir la texture d\'une béchamel, ajoutez le sel, le poivre et la muscade.<br>Ajoutez les jaunes d\'œufs ' +
      '(gardez bien les blancs) l\'un après l\'autre, en tournant toujours, puis le gruyère râpé.<br>Battez les ' +
      'blancs en neige très fermes.<br>Ajoutez-les délicatement à votre préparation, au dernier moment. Beurrez ' +
      'et farinez le moule à soufflé (ou plusieurs petits) et remplissez-le jusqu\'à moitié.<br>Enfournez pendant ' +
      '25 min environ.<br>Quand le soufflé gonfle et déborde légèrement du moule, servez aussitôt.',
    }, {
      name: 'Saumon à la mousse de courgettes',
      description: 'Rincer, essorer et ciseler l\'aneth et la menthe.<br>Peler et émincer l\'ail. ' +
      'Râper les courgettes. Les faire revenir dans 1 cuillère à soupe d\'huile d\'olive avec l\'ail émincé et ' +
      'les herbes ciselées.<br>Assaisonner (mais pas trop, attention au saumon fumé).<br>Réserver et laisser un peu ' +
      'refroidir.<br>Battre les oeufs et la crème en omelette.<br>Mélanger cette préparation avec les courgettes ' +
      'râpées et éventuellement, donner un petit coup de mixeur pour obtenir l\'aspect "mousse".<br>Tapisser 4 ' +
      'ramequins avec les tranches de saumon fumé.<br>Verser le mélange omelette-courgettes dans les ramequins ' +
      'tapissés de saumon.<br>Faire cuire au micro-ondes pendant 2 à 3 minutes, selon la puissance.',
    }];

    return entityUtils.createInOrder(app.models.starter, starters);
  },
};
