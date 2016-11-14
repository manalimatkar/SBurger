// Include dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// create app 
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// use body parser for urlencodeing
app.use(bodyParser.urlencoded({
    extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// assign handlebars to app engine and set view engine to use handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

var PORT = 3000;
app.listen(process.env.PORT || PORT);
