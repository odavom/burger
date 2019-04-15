// dependencies
let express = require('express');
let methodOverride = require('method-override')
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');

// variables
let PORT = process.env.PORT || 8081;
let app = express();
let routes = require('./controllers/burgers_controller.js');
// give server acces to routes
app.use('/', routes);
// serve static content for the app 
app.use(express.static(__dirname + '/public'));
// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 
app.use(methodOverride('_method'));



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




app.listen(PORT, function() {
    console.log('Server listening on http://localhost:' + PORT);
})