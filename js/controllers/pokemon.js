app.controller('PokemonCtrl', function($stateParams, Pokemon){
	var self = this,
		poke_id = $stateParams.id;

	Pokemon.get(poke_id).then(function(data){
		self.pokemon = data;
	});
})