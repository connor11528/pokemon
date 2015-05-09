var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var root = path.resolve('.');
var port = 3000;

/* Logging middleware */
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

/* Make sure json and form posts are parsed properly */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Serve any files in the app directory directly with app.html as the default page */
app.use('/', express.static(path.join(root, 'app'), {index: 'app.html'}));

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
