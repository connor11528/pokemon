var pokeData = require('./allPokemonData.json').injectRpcs;

// pokeData[0] is:
// [ '["dex","dump-gens"]',
//   [ { name: 'Red/Blue', shorthand: 'RB' },
//     { name: 'Gold/Silver', shorthand: 'GS' },
//     { name: 'Ruby/Sapphire', shorthand: 'RS' },
//     { name: 'Diamond/Pearl', shorthand: 'DP' },
//     { name: 'Black/White', shorthand: 'BW' },
//     { name: 'X/Y', shorthand: 'XY' } ] ]

pokeData = pokeData[1][1];
var pokeKeys = Object.keys(pokeData);

// Object.keys(pokeData) is:
// [ 'pokemon',
//   'formats',
//   'natures',
//   'abilities',
//   'moves',
//   'types',
//   'items' ]

// array of all pokemon
var whatever = pokeData.items;

console.log(JSON.stringify(whatever));

// Generate data files from shell:
// $ node getPokemonData.js > items.json


