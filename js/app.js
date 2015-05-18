
var app = angular.module('pokemon', ['ui.router']);

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
