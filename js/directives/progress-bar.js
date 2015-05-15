

app.directive('progressBar', function(){
	return {
		restrict: 'A',
		scope: {
			number: '=',
		},
		templateUrl: "js/directives/progress-bar.html"
	};
});
