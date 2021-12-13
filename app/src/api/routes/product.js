const db = require("../../db/database");

var express = require('express');
var router = express.Router();

// get all customers    :/api/products          GET
// get customer by Id   :/api/products/{id}     GET

// create products data :/api/products/         PUT
// update products data :/api/products/{id}     PATCH

// delete products      :/api/products/{id}     DELETE

router.get("/", function (req, res) {
  let cust = db.findAllProducts();
  cust.then((c) => res.send(c));
});

router.put('/', function (req, res) {
  console.log("req message is ", req.body)
  let product = db.insertProduct(req.body);
  product = product.then(p => res.send(p));
  return product
})

router.get('/:id', function (req, res) {
  let prodId = req.params.id
  let product = db.findProductById(prodId); // pass id here.
  product.then(p => res.send(p));
})


router.patch("/:id", function (req, res) {
  console.log("req message for patch is ", req.body);
  let customer = db.updateProduct(req.params.id, req.body);
  customer.then((c) => res.send(c));
});

router.delete("/:id", function (req, res) {
  let userId = req.params.id;
  console.log("Deleted", userId);
  let customer = db.deleteProduct(userId);
  customer.then((c) => res.send(c));
});

module.exports = router