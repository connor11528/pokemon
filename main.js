$(document).ready(function(){

	var POKEMON_BASE = "http://pokeapi.co/api/v1";

	var generatePokemonIds = function(num){
		var randomPokemonIds = [];
		for(var i = 0; i < num; i++){
			randomPokemonIds.push(Math.floor(Math.random() * (720 - 2)) + 2);
		}
		return randomPokemonIds;
	}
	var getPokemonImages = function(num, callback){
		var _randomPokemonIds = generatePokemonIds(num);

		_randomPokemonIds.forEach(function(pokemonId, i){
			var reqUrl = POKEMON_BASE + "/sprite/" + pokemonId;

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
			var imgUrl = 'http://pokeapi.co/' + imageData.image;

			$img.attr('src', imgUrl).appendTo('#image-container');
		});
		
	});
	
});