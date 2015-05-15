
app.directive('pokemon', function(){
	return {
		restrict: 'AE',
		scope: {
			name: '=',
			pokemonId: '='
		},
		template: "<h3><a href='/#/pokemon/{{pokemonId}}'>{{name}}</a></h3>"
	}
})
