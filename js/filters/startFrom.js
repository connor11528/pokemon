// starting point for pagination

app.filter('startFrom', function() {
    return function(input, start) {
    	if(typeof(input) === 'undefined') return;

        start = +start; //parse to int
        return input.slice(start);
    }
});