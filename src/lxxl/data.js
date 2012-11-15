// jsBoot.use('LxxlLib.model.Activity');
jsBoot.pack('LxxlLib.model.defines', function(api) {
  'use strict';

  this.lengths = {
    10: '10 minutes',
    15: '15 minutes',
    20: '20 minutes',
    30: '30 minutes',
    45: '45 minutes',
    60: '60 minutes'
  };

  this.difficulties = {
    easy: 'Facile',
    normal: 'Normal',
    hard: 'Difficile'
  };

  this.flavors = {
    simple: 'Page simple',
    quizz: 'Page quizz',
    tat: 'Page texte à trous',
    jmt: 'Page mix and match'
  };

  // You can add new matters here - but DONT RENAME existing keys!!!! - you can still change the value obviously
  this.matters = {
    fra: 'Français',
    lit: 'Littérature',
    mat: 'Maths',
    mate: 'Maths éco',
    sci: 'Sciences éco',
    svt: 'SVT',
    his: 'Histoire',
    geo: 'Géographie',
    phi: 'Philosophie',
    all: 'Allemand',
    eng: 'Anglais',
    esp: 'Espagnol',
    ita: 'Italien',
    lat: 'Latin',
    gre: 'Grec',
    mus: 'Musique',
    eps: 'EPS',
    tpe: 'TPE',
    inf: 'Informatique',
    other: 'Autre'
  };

  // You can add new levels here - but DONT RENAME existing keys!!!! - you can still change the value obviously
  this.levels = {
    ts: 'Terminale S',
    tes: 'Terminale ES',
    tl: 'Terminale L',
    ps: '1 S',
    pes: '1 ES',
    pl: '1 L',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    other: 'Autre'
  };

  this.categories = [
    {
      id: 1,
      title: 'Ceci est une catégorie attachée au français de terminale S',
      content: [
        {
          id: 11,
          title: 'dont voici une première sous-catégorie'
        },
        {
          id: 12,
          title: 'et une seconde sous-catégorie'
        }
      ],
      matter: {id: 'fra'},
      level: {id: 'ts'},
    },
    {
      id: 2,
      title: 'Ceci est une catégorie attachée au français de terminale L, sans subtree',
      matter: {id: 'fra'},
      level: {id: 'tl'},
    },
    {
      id: 3,
      title: 'Ceci est une dernière catégorie attachée au français autre',
      content: [
        {
          id: 31,
          title: 'dont voici une première sous-catégorie',
          content: [
            {
              id: 311,
              title: 'qui a elle-même une sous catégorie'
            }
          ]
        }
      ],
      matter: {id: 'fra'},
      level: {id: 'other'},
    }
  ];
});
