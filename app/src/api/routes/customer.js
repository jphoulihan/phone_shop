const db = require("./database");

var express = require('express')
var router = express.Router()
const bodyParser = require('body-parser');




router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// get all customers    :/api/customer          GET
// get customer by Id   :/api/customer/{id}     GET

// create customer data :/api/customer/         PUT     
// update customer data :/api/customer/{id}     PATCH

// delete customer      :/api/customer/{id}     DELETE

router.get('/', function (req, res) {
  let cust = db.findAllCustomers();
  cust.then( c => res.send(c))
})

router.get('/:id', function (req, res) {
    let userId = req.params.id
    let cust = db.findById(userId); // pass id here.
    console.log(userId)
    cust.then(c => res.send(c));
})

//
router.put('/', function (req, res) {
    console.log("req message is ", req.body)
    let customer = db.insertCustomer(req.body);
    customer.then(c => res.send(c));
})

router.patch('/id', function (req, res) {
    db.updateCustomer();

    res.send('this is updating the customer with the id 1')
})

router.delete('/id', function (req, res) {
    db.deleteCustomer();

    res.send('this is deleting the customer with the id 1')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router