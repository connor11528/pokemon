
app.directive('pokemon', function(){
	return {
		restrict: 'AE',
		scope: {
			name: '=',
			pokemonId: '='
		},
		template: "<span class='sprite-xyicons-{{name}}'></span><h3><a href='/#/pokemon/{{pokemonId}}'>{{name}}</a></h3>"
	}
});