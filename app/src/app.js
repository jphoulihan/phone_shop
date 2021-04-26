// Bring in our dependencies
const app = require('express')();

const routes = require('./api/routes');
var birds = require('./api/routes/birds');

var customer = require('./api/routes/customer')
var order = require('./api/routes/order')
var product = require('./api/routes/product')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  endpoint routing
app.use('/api/test', routes);
app.use('/api/birds', birds);

app.use('/api/customer', customer);
app.use('/api/order', order);
app.use('/api/product', product);


// Start server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});