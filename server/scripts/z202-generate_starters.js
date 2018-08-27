'use strict';

const entityUtils = require('../util/EntityUtils');

module.exports = {
  generate: function(app) {
    const starters = [{
      name: 'Concombre mimosa',
      description: 'Peler et découper un concombre en rondelles.\r\nPréparez la vinaigrette avec l\'huile, ' +
      'le vinaigre, le sel et le poivre.<br>Faire cuire un œuf dur, le hacher dans le presse-ail ou l\'écraser ' +
      'avec une fourchette et l\'ajouter aux rondelles de concombre.',
    }, {
      name: 'Bruschettas tomates-Basilic',
      description: 'Disposer les tranches de pain sur une plaque tapissée de papier sulfurisé et les faire ' +
      'griller 2 min sous le gril du four. Laisser refroidir hors du four. Pendant ce temps, couper la tomates ' +
      'en deux, l\'épépiner puis couper en dés. Peler les gousses d’ail, les frotter généreusement sur les ' +
      'tranches de pain grillé puis napper d’un filet d’huile d’olive. Répartir les dés de tomate et le basilic' +
      'ciselé. Arroser les bruschettas avec un filet de jus de citron vert. Poivrer et parsemer de fleur de sel',
    }, {
      name: 'Betteraves mimosa',
      description: 'Déposer l\'œuf dans une casserole d\'eau. Porter à ébullition et laisser cuire 10 min ' +
      'pour qu\'il devienne dur. Pendant ce temps, couper les betteraves en petits cubes. Sortir l\'œuf de ' +
      'la casserole avec une écumoire et le passer sous l\'eau froide. Napper les betteraves de la ' +
      'vinaigrette préparée avec les huiles, le vinaigre, le sel et le poivre. Ajouter l\'œuf dur ' +
      'préalablement écalé et écrasé à la fourchette.',
    }, {
      name: 'Carpaccio de courgettes au parmesan',
      description: 'Laver les courgettes sans les éplucher, les essuyer puis les couper en tranches ' +
      'fines à l\'aide d’un robot ou d’une mandoline. Les disposer sur les assiettes et ajouter les copeaux ' +
      'de parmesan. Verser le jus de citron dans un bol, saler, poivrer et émulsionner avec l’huile. Verser ' +
      'la sauce sur les courgettes puis placer au réfrigérateur pour environ 1 h. Faire légèrement griller ' +
      'les pignons de pin dans une petite poêle sans matière grasse. Les parsemer sur les courgettes, ajouter ' +
      'le basilic ciselé et servir.',
    }, {
      name: 'Carottes rapées',
      description: 'Laver, peler et râper les carottes. Faire une vinaigrette en mélangeant l\'huile, le ' +
      'jus du citron, le sel et le poivre. Verser la vinaigrette sur les carottes. Parsemer de persil haché.',
    }, {
      name: 'Potage de légumes',
      description: 'Éplucher et laver les légumes, puis les couper en morceaux. Dans un faitout, recouvrir ' +
      'les légumes d’eau avec une pincée de sel et faire cuire 30 min. Mixer le potage avec la crème de ' +
      'gruyère. Ajouter le lait en poudre, le jaune d’oeuf, la crème fraîche et mélanger le tout au fouet. ' +
      'Servir bien chaud.',
    }, {
      name: 'Artichaut vinaigrette',
      description: 'Commencer par casser les queues des artichauts Couper à ras le dessous Enlever les plus ' +
      'grosses feuilles sur l’extérieur des artichauts car même cuites elles restent dures et indigestes. ' +
      'Cuisson des artichauts : Remplissez une grande marmite avec 2 litres d’eau Ajouter le gros sel (ou sel ' +
      'fin par défaut) Laisser cuire environ 30 à 40 minutes selon la grosseur des artichauts Les artichauts ' +
      'sont cuits lorsque les feuilles se détachent facilement Égoutter les artichauts tête en bas dans une ' +
      'passoire.' +
      'Préparation de la vinaigrette : Mélanger l’huile d’olive, le vinaigre, la moutarde Ajouter les ' +
      'échalotes ciselées Ajouter la ciboulette ciselée Saler, poivrer. Servir les artichaut tel quel, ' +
      'comme sur la photo. Vous pourrez mettre de la vinaigrette en décoration mais prévoir à côté un petit ' +
      'ramequin rempli de vinaigrette par personne.',
    }, {
      name: 'Caviar d\'aubergines',
      description: 'Préchauffez votre four à 200°C. Nettoyez l’aubergine et ouvrez-la en 2 dans le sens de ' +
      'la longueur. Déposez-la sur une plaque de cuisson recouverte de papier sulfurisé. Incisez les ' +
      'légèrement, salez, poivrez. Recouvrir avec la gousse d’ail dégermée coupée en petits dés. Déposer le ' +
      'thym et arrosez d’un peu d’huile d’olive.  Au bout de 30 à 40 minutes, vos aubergines doivent être ' +
      'cuites, toutes ratatinées. Avec une cuiller retirez la chair des aubergines. Mixez la pour obtenir une ' +
      'purée fine. Ajoutez le jus de citron et montez à l’huile d’olive jusqu’à obtenir la consistance ' +
      'souhaitée. Goûtez, rectifiez l’assaisonnement si besoin.',
    }, {
      name: 'Rillettes de thon au basilic',
      description: 'Egoutter le thon et l\'émietter à la fourchette. Ajouter dans l\'ordre les petits ' +
      'suisses, la crème fraîche, la moutarde, le jus de citron, le basilic, sel et poivre. Mélanger. Placer ' +
      'au frigo au moins une demi-heure et saupouder de paprika au moment de servir.',
    }, {
      name: 'Salade de courgettes à la feta',
      description: 'Couper les courgettes en fines rondelles, et les faire dégorger avec du gros sel dans ' +
      'une passoire environ 30 min (jusqu\'à ce qu\'elles soient tendres). Pendant ce temps, couper la feta ' +
      'en petits cubes, couper les tomates en petits quartiers, couper les oignons en petit quartier et faites ' +
      'les blanchir à l\'eau salée 2 min. Mettre les courgettes avec la feta, les tomates, les oignons, les ' +
      'olives dans un saladier, ajouter le basilic. Mélanger avec l’huile d’olive.',
    }, {
      name: 'Oeufs cocotte',
      description: 'Faire préchauffer le four à 240°C (thermostat 8). Beurrer 4 ramequins.Couper les ' +
      'tranches de bacon en lanières (une tranche par ramequin) et les déposer dans le fond des ramequins. ' +
      'Casser un oeuf dans chaque ramequin, déposer une ou deux cuillères à café de crème fraîche sur les ' +
      'oeufs puis recouvrir de gruyère râpé. Mettre une noisette de beurre sur chaque ramequin et enfourner ' +
      'pendant 10 à 15 minutes. A déguster chaud.',
    }, {
      name: 'Salade Melon Jambon',
      description: 'Dans un saladier verser 4 cuillères à soupe d\'huile d\'olive, une cuillère à soupe ' +
      'de vinaigre balsamique et 3 feuilles de menthe coupées en petits morceaux. Ajouter les ingrédients ' +
      'suivant au fur et à mesure pour qu\'ils s\'imprègnent bien de la vinaigrette : Couper les tomates en ' +
      'tout petits dés d\'1 à 2 cm. Couper la feta en petits dés et les tranches de jambon en morceaux ' +
      'correspondants à une bouchée (avec des ciseaux c\'est plus facile qu\'avec un couteau.);  Ôter les ' +
      'pépins du melon puis le couper en petits cubes. Bien mélanger le tout et laisser reposer au frigo si ' +
      'possible une demie-heure.',
    }, {
      name: 'Salade de pommes de terre',
      description: 'Faites cuire les pommes de terre. Egouttez-les et coupez-les en rondelles, ajoutez ' +
      'un oignon rouge coupé en dés, les cornichons coupés en rondelles et de la mayonnaise. Dégustez bien ' +
      'frais.',
    }, {
      name: 'Coleslow',
      description: 'Râper le chou et la carotte dans un saladier. Mélanger fromage blanc et mayonnaise, ' +
      'puis ajouter vinaigre, sel, sucre et ciboulette. Ajouter au mélange chou / carottes et mêler ' +
      'intimement. Mettre au frais et déguster.',
    }, {
      name: 'Flan aux carottes',
      description: 'Faire revenir les carottes coupées en lamelles dans un peu de beurre. Bien laisser ' +
      'évaporer. Mixer les carottes et ajouter tout le reste. Verser dans un ramequin beurré et cuire au ' +
      'bain-marie à four moyen pendant 35 minutes (vérifier la cuisson avec la pointe d\'un couteau).',
    }, {
      name: 'Salade de coeur de palmier au surimi',
      description: 'Égoutter les cœurs de palmier. Les couper en petits tronçons d\'environ 2 cm. Couper ' +
      'également les bâtonnets de surimi en tronçons de 2 cm. Verser le tout dans un saladier, arroser de jus ' +
      'de citron et ajouter la mayonnaise. Parsemer de persil ciselé et assaisonner.',
    }, {
      name: 'Salade au maïs et champignons de paris en vinaigrette',
      description: 'Nettoyer et couper les champignons en quatre. Égoutter le maïs. Dans un saladier, ' +
      'confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le poivre. ' +
      'Émulsionner avec l\'huile et le fromage blanc. Ajouter les champignons et le maïs puis mélanger.',
    }, {
      name: 'Salade de courgettes croquantes au maïs',
      description: 'Nettoyer les courgettes et les couper en fines lamelles. Égoutter le maïs. Dans un ' +
      'saladier, confectionner la vinaigrette en délayant la moutarde avec le vinaigre, le sel et le ' +
      'poivre. Émulsionner avec l\'huile. Ajouter les courgettes et le maïs, mélanger et servir frais.',
    }, {
      name: 'Soufflé au fromage',
      description: 'Préchauffez votre four à th.6 (180°C). Dans une casserole, faites un roux en faisant ' +
      'fondre le beurre et en y ajoutant la farine. Mélangez bien, jusqu\'à ce que le beurre soit totalement ' +
      'absorbé. Ajoutez ensuite le lait en continuant à mélanger. Lorsque le mélange s\'épaissit et commence à ' +
      'avoir la texture d\'une béchamel, ajoutez le sel, le poivre et la muscade. Ajoutez les jaunes d’œufs ' +
      '(gardez bien les blancs) l’un après l’autre, en tournant toujours, puis le gruyère râpé. Battez les ' +
      'blancs en neige très fermes. Ajoutez-les délicatement à votre préparation, au dernier moment. Beurrez ' +
      'et farinez le moule à soufflé (ou plusieurs petits) et remplissez-le jusqu\'à moitié. Enfournez pendant ' +
      '25 min environ. Quand le soufflé gonfle et déborde légèrement du moule, servez aussitôt.',
    }, {
      name: 'Saumon à la mousse de courgettes',
      description: 'Rincer, essorer et ciseler l\'aneth et la menthe. Peler et émincer la gousse d\'ail. ' +
      'Râper les courgettes. Les faire revenir dans 1 cuillère à soupe d\'huile d\'olive avec l\'ail émincé et ' +
      'les herbes ciselées. Assaisonner (mais pas trop, attention au saumon fumé). Réserver et laisser un peu ' +
      'refroidir. Battre les oeufs et la crème en omelette. Mélanger cette préparation avec les courgettes ' +
      'râpées et éventuellement, donner un petit coup de mixeur pour obtenir l\'aspect "mousse". Tapisser 4 ' +
      'ramequins avec les tranches de saumon fumé. Verser le mélange omelette-courgettes dans les ramequins ' +
      'tapissés de saumon. Faire cuire au micro-ondes pendant 2 à 3 minutes, selon la puissance.',
    }];

    return entityUtils.createInOrder(app.models.starter, starters);
  },
};
