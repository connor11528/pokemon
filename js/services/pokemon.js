app.service('Pokemon', function($http){

	this.getPokedex = $http.get('http://pokeapi.co/api/v1/pokedex/1/', {cache: true});

	this.get = function(id){
		return $http.get('http://pokeapi.co/api/v1/pokemon/' + id + '/', {cache: true})
			.then(function(res){
				return res.data;
			});
	};

	this.getImageURL = function(id){
		return $http.get('http://pokeapi.co/api/v1/sprite/' + id)
			.then(function(res){
				return 'http://pokeapi.co' + res.data.image;
			});
	};
});