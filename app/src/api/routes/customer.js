const db = require("./database");

var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// get all customers    :/api/customer          GET
// get customer by Id   :/api/customer/{id}     GET
// create customer data :/api/customer/         PUT     
// update customer data :/api/customer/{id}     PATCH
// delete customer      :/api/customer/{id}     DELETE

// get all customers 
router.get('/', function (req, res) {

  let cust = db.findAllCustomers();
  cust.then( c => res.send(c))
  //console.log("returning data of ", cust);
  //res.send(cust)
  // res.send('this is all the customers')
  // res.send(cust)
})

router.get('/id', function (req, res) {
    let cust = db.findCustomerById();
    res.send(cust)
})

router.put('/', function (req, res) {
    
    db.createCustomer();

    res.send('this is creating a new customer')
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