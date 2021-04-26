const db = require("../../assignment-05-db/database");

var express = require("express");
var router = express.Router();

// get all customers    :/api/customer          GET
// get customer by Id   :/api/customer/{id}     GET

// create customer data :/api/customer/         PUT
// update customer data :/api/customer/{id}     PATCH

// delete customer      :/api/customer/{id}     DELETE

router.get("/", function (req, res) {
  let cust = db.findAllCustomers();
  cust.then((c) => res.send(c));
});

router.get("/:id", function (req, res) {
  let userId = req.params.id;
  let cust = db.findCustomerById(userId); // pass id here.
  console.log(userId);
  cust.then((c) => res.send(c));
});

//
router.put("/", function (req, res) {
  console.log("req message is for put is ", req.body);
  let customer = db.insertCustomer(req.body);
  customer = customer.then((c) => res.send(c));
});

router.patch("/:id", function (req, res) {
  console.log("req message for patch is ", req.body);
  let customer = db.updateCustomer(req.params.id, req.body);
  customer.then((c) => res.send(c));
});

router.delete("/:id", function (req, res) {
  let userId = req.params.id;
  console.log("Deleted", userId);
  let customer = db.deleteCustomer(userId);
  customer.then((c) => res.send(c));
});

module.exports = router;
