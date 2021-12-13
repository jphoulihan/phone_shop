/***
 *  Config 
 */
const assert = require("assert");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "mobile_phone_store";
const client = new MongoClient(url, { useUnifiedTopology: true });

/*********DATA DUMP FOR CUSTOMERS AND PRODUCTS  CODE BLOCK **********/

// uncomment code block below, copy object array from customers.js/products.js
//add each to their respective insert queries and run in cli --> app/src/db  node database.js 

// const insertCustomers = function (db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection("customers");
  
//   collection.insertMany([], function (err, result) {
//     // using the assert module for testing
//     assert.strictEqual(err, null);
//     assert.strictEqual(3, result.result.n);
//     assert.strictEqual(3, result.ops.length);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

// const insertProducts = function (db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection("products");
//   // Insert some documents
//   collection.insertMany([], function (err, result) {
//       // using the assert module for testing
//   assert.strictEqual(err, null);
//   assert.strictEqual(10, result.result.n);
//   assert.strictEqual(10, result.ops.length);
//   // all good if we get to here
//   console.log("Inserted 10 document into the collection");
//   callback();
// });
// };

// client.connect(function (err) {
//   assert.strictEqual(null, err);
//   console.log("Connected!\n");

//   const db = client.db(dbName);

//   insertCustomers(db, function() {
//     client.close();
//   });

//   insertProducts(db, function() {
//       client.close();
//     });

// });

// insertCustomers();
// insertProducts();

//please comment out code block after db is populated with test data this contains a seperate
//connection to the other crud functions below
//****************** CODE BLOCK FOR DATA INSERT ENDS HERE ************************************ */


/***
 *
 *
 *
 *  Customers
 *
 *
 *
 *
 */

//connecting to database // this may need to be commented out during population of db above
const db = client.connect(function (err) {
  console.log("Connected!\n");
  return client.db(this.dbName);
});

async function findAllCustomers() {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  let customer = await collection.find({}).toArray();
  console.log(customer);
  return customer;
}

async function findCustomerById(id) {
  // console.log("FIND CUSTOMER", id);

  const db = client.db(dbName);

  // console.log("GET DATABASE", id);

  const collection = db.collection("customers");

  // console.log("HAS collection", id);

  var id = mongoose.Types.ObjectId(id);
  // console.log("HAS ID", id);

  var query = { _id: id };
  let customer = await collection.find(query).toArray();
  // console.log("@findCustomerById FOUND !!! ", customer);

  return customer;
}

async function insertCustomer(data) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var query = { data };
  let customer = await collection.insertOne(query);
  return customer.ops[0]._id;
}

async function updateCustomer(id, data) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let customer = await collection.replaceOne(id, data);
  return customer.ops[0].data;
}

async function deleteCustomer(id) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let customer = await collection.deleteOne(id);
}

/***
 *
 *
 *
 *  Products
 *
 *
 *
 *
 */

async function findAllProducts() {
  const db = client.db(dbName);
  const collection = db.collection("products");
  let result = await collection.find({}).toArray();
  console.log(result);
  return result;
}

async function findProductById(id) {
  const db = client.db(dbName);
  const collection = db.collection("products");
  console.log("id", id);

  var id = mongoose.Types.ObjectId(id);
  var query = { _id: id };
  let product = await collection.find(query).toArray();
  return product;
}

async function insertProduct(data) {
  const db = client.db(dbName);
  const collection = db.collection("products");
  var query = { data };
  let product = await collection.insertOne(query);
  return product.ops[0]._id;
}

async function updateProduct(id, data) {
  const db = client.db(dbName);
  const collection = db.collection("products");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let product = await collection.replaceOne(id, data);
  return product.ops[0].data;
}

async function deleteProduct(id) {
  const db = client.db(dbName);
  const collection = db.collection("products");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let product = await collection.deleteOne(id);
}

/***
 *
 *
 *
 *  Orders
 *
 *
 *
 *
 */

async function findAllOrders() {
  const db = client.db(dbName);
  const collection = db.collection("orders");
  let orders = await collection.find({}).toArray();
  console.log("Orders found :\n", orders);
  return orders;
}

async function findOrderById(id) {
  const db = client.db(dbName);
  const collection = db.collection("orders");
  console.log("Order id found :\n", id);

  var id = mongoose.Types.ObjectId(id);
  var query = { _id: id };
  let product = await collection.find(query).toArray();
  return product;
}

async function insertOrder(data) {
  let customer = await this.findCustomerById(data.customer_id);

  let product = await this.findProductById(data.product_id);

  if (customer.length === 0 && product.length === 0) {
    console.log("ERROR CRASH -- entity not found !!!!!");
  } else {
    console.log("Order Inserted");
  }

  const db = client.db(dbName);
  const collection = db.collection("orders");

  let order = data;
  let query = { order };
  let orders  = await collection.insertOne(query);

  return orders.ops[0]._id;
}

async function updateOrder(id, data) {
  const db = client.db(dbName);
  const collection = db.collection("orders");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let product = await collection.replaceOne(id, data);
  return product.ops[0].data;
}

async function deleteOrder(id) {
  const db = client.db(dbName);
  const collection = db.collection("orders");
  var id = { _id: mongoose.Types.ObjectId(id) };
  let product = await collection.deleteOne(id);
}

/***
 *
 * exports
 * each query exported to their respective router get/put/patch/delete
 * in their respective files customer.js/products.js/orders.js
 *
 */
module.exports.findAllCustomers = findAllCustomers;
module.exports.findCustomerById = findCustomerById;
module.exports.insertCustomer = insertCustomer;
module.exports.updateCustomer = updateCustomer;
module.exports.deleteCustomer = deleteCustomer;

module.exports.findAllProducts = findAllProducts;
module.exports.findProductById = findProductById;
module.exports.insertProduct = insertProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;

module.exports.findAllOrders = findAllOrders;
module.exports.findOrderById = findOrderById;
module.exports.insertOrder = insertOrder;
module.exports.updateOrder = updateOrder;
module.exports.deleteOrder = deleteOrder;
