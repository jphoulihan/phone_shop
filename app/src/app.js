const app = require('express')();

const routes = require('./api/routes');

//assignment-05-

var customer = require('./api/routes/assignment-05-customer')
var order = require('./api/routes/assignment-05-order')
var product = require('./api/routes/assignment-05-product')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  endpoint routing
app.use('/api/customer', customer);
app.use('/api/order', order);
app.use('/api/product', product);


// Start server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});