app.service('Pokemon', function($http){

	this.getPokedex = $http.get('http://pokeapi.co/api/v1/pokedex/1/', {cache: true});

	this.get = function(id){
		return $http.get('http://pokeapi.co/api/v1/pokemon/' + id + '/', {cache: true})
			.then(function(res){
				return res.data;
			});
	};

	this.getImageURL = function(id){
		var id = parseInt(id) + 1;
		return $http.get('http://pokeapi.co/api/v1/sprite/' + id)
			.then(function(res){
				return 'http://pokeapi.co' + res.data.image;
			});
	};
});


// caching
// http://jsbin.com/lefegipuvo/2/edit

// .factory('poke', function ($http, $q) {
//   var cachedPoke = {};
//   return function (num) {
//     if (cachedPoke[num]) {
//       return $q.when(cachedPoke[num]);
//     }
//     return $http.get('http://pokeapi.co/api/v1/pokemon/' + num)
//     .then(function (httpInfo) {
//       cachedPoke[num] = httpInfo.data;
//       return httpInfo.data;
//     });
//   };
// });