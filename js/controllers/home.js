
app.controller('HomeCtrl', function(Pokemon){
	var self = this;
	self.searchTerm = '';

	self.getIdFromURI = function(resource_uri){
		// get id from resource_uri
		var pokeId = resource_uri.match(/\d/g);
		pokeId.shift();
		return pokeId.join('');
	};

	Pokemon.getPokedex.then(function(res){
		self.pokedex = res.data.pokemon;
	});
});


