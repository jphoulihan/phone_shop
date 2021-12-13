const db = require("../../db/database");

var express = require("express");
var router = express.Router();

// get all orders    :/api/orders          GET
// get orders by Id   :/api/orders/{id} orders
// create orders data :/api/orders/         PUT
// update orders data :/api/orders/{id}   orders
// delete orders      :/api/orders/{id}     DELETE

// define the home page route
router.get("/", function (req, res) {
  let cust = db.findAllOrders();
  cust.then((c) => res.send(c));
});

router.put("/", function (req, res) {
  console.log("req message is ", req.body);
  let order = db.insertOrder(req.body);
  order = order.then((c) => res.send(c));
  return order;
});

router.get("/:id", function (req, res) {
  let order = db.findOrderById(req.params.id);
  order.then((o) => res.send(o));
});

router.patch("/:id", function (req, res) {
  console.log("req message for patch is ", req.body);
  let customer = db.updateOrder(req.params.id, req.body);
  customer.then((c) => res.send(c));
});

router.delete("/:id", function (req, res) {
  let userId = req.params.id;
  console.log("The following order has been successfully deleted: ", userId);
  let customer = db.deleteOrder(userId);
  customer.then((c) => res.send(c));
});

module.exports = router;
