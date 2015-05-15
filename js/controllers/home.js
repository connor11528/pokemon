
app.controller('HomeCtrl', function(Pokemon){
	var self = this;
	self.searchTerm = '';
	self.testing = 'this is a test';

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

app.controller('PaginationCtrl', function($scope){
	var self = this;

	$scope.totalItems = 64;
	$scope.currentPage = 4;

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};

	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;

});



