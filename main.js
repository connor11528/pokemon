$(document).ready(function(){

	var POKEMON_BASE = "http://pokeapi.co/";

	var generatePokemonIds = function(num){
		var randomPokemonIds = [];
		for(var i = 0; i < num; i++){
			randomPokemonIds.push(Math.floor(Math.random() * (720 - 2)) + 2);
		}
		return randomPokemonIds;
	};

	var getPokemonImages = function(num, callback){
		var randomPokemonIds = generatePokemonIds(num);

		randomPokemonIds.forEach(function(pokemonId, i){
			var reqUrl = POKEMON_BASE + "api/v1/sprite/" + pokemonId;

			$.ajax({
				url: reqUrl,
				type: "GET",
				dataType: 'jsonp',
				success: callback
			});
		});

	};

	$('.generate').on('click', function(e){
		$('#image-container').empty();

		getPokemonImages(5, function(imageData){
			var $img = $('<img id="' + imageData.id +'">');

			$img.attr('src', POKEMON_BASE + imageData.image).appendTo('#image-container');
		});
		
	});

	var displayPokemon = function(profileData){
		$('dl').empty();
		var profileInfo = '';
		for(var key in profileData){
			profileInfo += '<dt>' + key + '</dt>' + '<dd>' + JSON.stringify(profileData[key]) + '</dd>'
		}
		$('dl').append(profileInfo);
	};

	// get all pokemon
	var $search = $('.search');
	$.ajax({
		url: POKEMON_BASE + "api/v1/pokedex/1/",
		success: function(allPokemon){
			console.log(allPokemon.pokemon);
			var pokeList = '';
			allPokemon.pokemon.forEach(function(pokemon, i){
				pokeList += '<li class="list-group-item" id="' + pokemon.resource_uri + '">' + pokemon.name + '</li>'
			});
			$('.side-list').append(pokeList);

			// search functionality
			$search.removeClass('disabled');
			$search.on('click', function(){
				var searchTerm = $('.search-field').val().toLowerCase();
				allPokemon.pokemon.forEach(function(pokemon, i){
					if (pokemon.name === searchTerm){
						$.ajax({
							url: POKEMON_BASE + pokemon.resource_uri,
							success: displayPokemon,
							error: function(err){
								alert('Whoops! ' + err)
							}
						});
					}
				});
			});
		}
	});

	$('.side-list').on('click', '.list-group-item', function(){
		var _this = $(this);
		_this.siblings().css('background-color', 'white');
		_this.css('background-color', 'steelblue');
		var resource_uri = _this.attr('id');
		$.ajax({
			url: POKEMON_BASE + resource_uri,
			success: displayPokemon,
			error: function(err){
				alert('Whoops! ' + err)
			}
		});

	})
});

