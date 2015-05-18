
app.controller('HomeCtrl', function($scope, Pokemon){
	$scope.searchTerm = '';

	Pokemon.getPokedex().then(function(res){
		$scope.pokedex = res.data.pokemon;
	});

	$scope.getIdFromURI = function(resource_uri){
		// get id from resource_uri
		var pokeId = resource_uri.match(/\d/g);
		pokeId.shift();
		return pokeId.join('');
	};

	// pagination
	$scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.numberOfPages = function(){
    	if(typeof($scope.pokedex) === 'undefined') return 0;

        return Math.ceil($scope.pokedex.length/$scope.pageSize);
    };

});

