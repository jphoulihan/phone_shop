const db = require("../../db/database");

var express = require('express')
var router = express.Router()

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
    let cust = db.findCustomerById(userId); // pass id here.
    console.log(userId)
    cust.then(c => res.send(c));
})

//
router.put('/', function (req, res) {
    console.log("req message is ", req.body)
    let customer = db.insertCustomer(req.body);
    customer = customer.then(c => res.send(c));
    return customer
})

router.patch('/:id', function (req, res) {
    let customer =  db.updateCustomer(req.params.id, req.body);
    customer.then(c => res.send(c));
})

router.delete('/:id', function (req, res) {
    let userId = req.params.id
    let customer =  db.deleteCustomer(userId);
    customer.then(c => res.send(c));
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router