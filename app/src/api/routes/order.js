const db = require("../../db/database");

var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('order home page')
})

router.put('/', function (req, res) {
  console.log("req message is ", req.body)
  let order = db.insertOrder(req.body);
  order = order.then(c => res.send(c));
  return order
})

router.get('/:id', function (req, res) {
  let order = req.params.id
  let order = db.findById(orderId); // pass id here.
  order.then(o => res.send(o));
})

// getOrder(id) {
//   console.log("@DB get order by id", id)
//   db.findOne(id)
// }

//createOrder() {
  // check if customer exists
  // check if item exists --- otherwise no order take place. CRASH!

  // create order
  // post: {refCustomerID:, refItemId:}

  // check if customer exists,
  // check if items exists,

  // if either are false, exception - return message and http 409 entity does not exist

//}

module.exports = router