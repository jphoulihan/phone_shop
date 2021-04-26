const db = require("./database");

var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('items home page')
})

//
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


module.exports = router