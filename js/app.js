
var app = angular.module('pokemon', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    	.state("home", {
    		url: '/',
    		controller: 'HomeCtrl',
    		controllerAs: 'home',
    		templateUrl: "templates/home.html"
    	})
    	.state("pokemon", {
    		url: '/pokemon/:id',
    		templateUrl: "templates/pokemon.html",
    		controller: 'PokemonCtrl',
    		controllerAs: 'pokemon'
    	});

	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/404');
});


// var POKEMON_BASE = "http://pokeapi.co/";

// // get random index of pokeman
// var generatePokemonIds = function(num){
// 	var randomPokemonIds = [];
// 	for(var i = 0; i < num; i++){
// 		randomPokemonIds.push(Math.floor(Math.random() * (720 - 2)) + 2);
// 	}
// 	return randomPokemonIds;
// };


// // get all pokemon
// var $search = $('.search');
// $.ajax({
// 	url: POKEMON_BASE + "api/v1/pokedex/1/",
// 	success: function(allPokemon){
// 		var pokeList = '';
// 		allPokemon.pokemon.forEach(function(pokemon, i){
// 			pokeList += '<li class="list-group-item" id="' + pokemon.resource_uri + '">' + pokemon.name + '</li>'
// 		});
// 		$('.side-list').append(pokeList);

// 		// search functionality
// 		$search.removeClass('disabled');
// 		$search.on('click', function(){
// 			var searchTerm = $('.search-field').val().toLowerCase();
// 			allPokemon.pokemon.forEach(function(pokemon, i){
// 				// display matching pokemon
// 				if (pokemon.name === searchTerm){
// 					var reqUrl = POKEMON_BASE + "api/v1/sprite/" + getIdFromURI(pokemon.resource_uri);

// 					$.ajax({
// 						url: POKEMON_BASE + pokemon.resource_uri,
// 						success: displayPokemon,
// 						error: function(err){
// 							alert('Whoops! ' + err)
// 						}
// 					});
// 				}
// 			});
// 		});
// 	}
// });

// var getIdFromURI = function(resource_uri){
// 	// get id from resource_uri
// 	var pokeId = resource_uri.match(/\d/g);
// 	pokeId.shift();
// 	return pokeId.join('');
// };

// // side nav click listener
// $('.side-list').on('click', '.list-group-item', function(){
// 	var _this = $(this);
// 	_this.siblings().css('background-color', 'white');
// 	_this.css('background-color', 'steelblue');

// 	var reqUrl = POKEMON_BASE + "api/v1/sprite/" + getIdFromURI(_this.attr('id'));

// 	// update image
// 	$.ajax({
// 		url: reqUrl,
// 		type: "GET",
// 		dataType: 'jsonp',
// 		success: function(imageData){
// 			$('.profile-image').attr('src', POKEMON_BASE + imageData.image);
// 		}
// 	});

// 	// get info
// 	$.ajax({
// 		url: POKEMON_BASE + _this.attr('id'),
// 		success: displayPokemon,
// 		error: function(err){
// 			alert('Whoops! ' + err)
// 		}
// 	});

// });
