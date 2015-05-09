// var getIdFromURI = function(resource_uri){
//  // get id from resource_uri
//  var pokeId = resource_uri.match(/\d/g);
//  pokeId.shift();
//  return pokeId.join('');
// };

// var reqUrl = POKEMON_BASE + "api/v1/sprite/" + getIdFromURI(_this.attr('id'));

// // update image
// $.ajax({
//  url: reqUrl,
//  type: "GET",
//  dataType: 'jsonp',
//  success: function(imageData){
//      $('.profile-image').attr('src', POKEMON_BASE + imageData.image);
//  }
// });


pokeService = (function () {

    var POKEMON_BASE = "http://pokeapi.co/";

    // The public API
    return {
        getPokedex: function(){
            return $.ajax(POKEMON_BASE + 'api/v1/pokedex/1/');
        },
        findById: function(id) {
            return $.ajax(POKEMON_BASE + 'api/v1/pokemon/' + id); 
        },
        findAll: function(values) {
            return $.ajax({url: baseURL + "/products", data: values});
        }
    };

}());