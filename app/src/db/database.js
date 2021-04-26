//make mongodb connection

/***
 * 
 * 
 * 
 *  Config
 * 
 * 
 * 
 * 
 */
const assert = require("assert");
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "mobile_phone_store";
const client = new MongoClient(url, { useUnifiedTopology: true });


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

//connecting to database, crud inside connection

const db = client.connect(function (err) {
  console.log("Connected!\n");
  return client.db(this.dbName);
});

async function findOneCustomer() { 
  const db = client.db(dbName);
  const collection = db.collection("customers");
  let customer = await collection.findOne({ fname: "Méabh" });
  console.log("we found customer with data of ", customer);
  return customer
};

async function findAllCustomers() { 
  const db = client.db(dbName);
  const collection = db.collection("customers");
  let customer = await collection.find({}).toArray();
  return customer
};

async function findCustomerById(id) {
  console.log("FIND CZSTOIMER", id)
 
  const db = client.db(dbName);

  console.log("GET DATABASE", id)

  const collection = db.collection("customers");

  console.log("HAS collection", id)

  var id = mongoose.Types.ObjectId(id);
  console.log("HAS ID", id)

  var query = {_id: id};
  let customer = await collection.find(query).toArray();
  console.log("@findCustomerById FOUND !!! ", customer)

  return customer
}

async function insertCustomer(data) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var query = {data};
  let customer = await collection.insertOne(query);
  return customer.ops[0]._id
}

async function updateCustomer(id, data) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var id = {_id: mongoose.Types.ObjectId(id)};
  let customer = await collection.replaceOne(id, data);
  return customer.ops[0].data
}

async function deleteCustomer(id) {
  const db = client.db(dbName);
  const collection = db.collection("customers");
  var id = {_id: mongoose.Types.ObjectId(id)};
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

async function insertProduct(data) {
  const db = client.db(dbName);
  const collection = db.collection("products");
  var query = {data};
  let product = await collection.insertOne(query);
  return product.ops[0]._id
}

async function findProductById(id) { 
  const db = client.db(dbName);
  const collection = db.collection("product");
  console.log("id", id)

  var id = mongoose.Types.ObjectId(id);
  var query = {_id: id};
  let product = await collection.find(query).toArray();
  return product
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

 async function insertOrder(data) {

  // findCustomerById()
  console.log("@đB!!! data is ", data)
  
  let customer = await this.findCustomerById(data.customer_id);

  console.log("findCustomerById ---> ",customer)

  let product = await this.findProductById(data.product_id);
  console.log("findProductById --->",product)

  if (customer.length === 0 && product.length === 0) {
    console.log("ERROR CRASH -- entity not found !!!!!")
  } else {
    console.log("SUCCEEDED")
  }

  const db = client.db(dbName);
  const collection = db.collection("orders");


  var query = {data};
  let order = await collection.insertOne(query);

  
  return order.ops[0]._id
}






/***
 * 
 * 
 * 
 *  exports
 * 
 * 
 * 
 * 
 */
module.exports.findAllCustomers = findAllCustomers
module.exports.findCustomerById = findCustomerById
module.exports.insertCustomer = insertCustomer 
module.exports.updateCustomer = updateCustomer 
module.exports.deleteCustomer = deleteCustomer 





module.exports.insertProduct = insertProduct 
module.exports.findProductById = findProductById 
module.exports.insertOrder = insertOrder 

// const deleteCustomers = async function (db, callback) {
  //   const collection = db.collection("customers");
  
  //   let deleted = await collection.deleteMany({});
  //   console.log(deleted);
  //   callback();
  // };
  
// const updateCustomer = async function (db, callback) {
//   const collection = db.collection("customers");

//   let query = { fname: "Méabh" };
//   let values = { $set: { lname: "Newman" } };
//   let options = { upsert: true };
  
//   const docBefore = await collection.findOne(query);
//   await collection.updateOne(query, values, options);
//   const message = "has been updated to";
//   const docAfter = await collection.findOne(query);

//   Promise.all([docBefore, message, docAfter]).then((values) =>
//     console.log(values)
//   );
//   // console.log(beforeUpdate);
//   // console.log(res);
//   //close connection to db gets passed into this callback.
//   callback();
// };




// function createCustomer();
// function updateCustomer();
// function deleteCustomer();

// asfasf

// //Creating Orders collection containing customer id, and products ordered ids
// //function is assigned to var therefore it is an inline function
// //to do, what is an anonymous function?

// const insertOrder = async function (db, callback) {
//   //first insert order document
//   const collection = db.collection("orders");

//   //get id of customer who placed order
//   let customer = await db.collection("customers").findOne({ fname: "Méabh" });

//   //get id of product the customer selects
//   let order = await db
//     .collection("products")
//     .findOne({ model: "P30 PRO" });

//   console.log("customer id  :\n", customer._id, "\norder id :\n", order._id);

//   const result = await collection.insertOne({
//     customer_id: customer._id,
//     order_id: [order._id],
//     unique:true
//   });

//   console.log("result =>", result);

//   callback();
// };


// const findOrder = async function (db, callback) {
//   const collection = db.collection("orders");

//   //here we wait to get and log customer details before continuing the execution
//   let doc = await collection.findOne({});

//   console.log(JSON.stringify(doc, null, 2));
//   //close connection to db gets passed into this callback.
//   callback();
// };

// //retrieve specific customer's order
// const customerHasOrder = async function (db, callback) {
//   //matching from customers collection with orders collection on customers._id with orders.customers_id
//   const pipeline = [{
//     $lookup: {
//       from: "orders",
//       localField: "_id",
//       foreignField: "customer_id",
//       as:"res"
//     },
//   }];

//   let docs = await db.collection("customers").aggregate(pipeline).toArray();
//   console.log(JSON.stringify(docs, null, 2));
//   callback();
// };

// //D
// const deleteOrders = async function (db, callback) {
//   const collection = db.collection("orders");

//   let deleted = await collection.deleteMany({});
//   console.log(deleted);
//   callback();
// };


// const insertCustomers = function (db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection("customers");
//   // Insert some documents
//   let insertCustomers = customers;
//   collection.insertMany(insertCustomers, function (err, result) {
//     // using the assert module for testing
//     assert.strictEqual(err, null);
//     assert.strictEqual(3, result.result.n);
//     assert.strictEqual(3, result.ops.length);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

// const findCustomer = async function (db, callback) {
//   const collection = db.collection("customers");

//   //here we wait to get and log customer details before continuing the execution
//   let doc = await collection.findOne({ fname: "Méabh" });

//   console.log(doc);
//   //close connection to db gets passed into this callback.
//   callback();
// };

// const updateCustomer = async function (db, callback) {
//   const collection = db.collection("customers");

//   let query = { fname: "Méabh" };
//   let values = { $set: { lname: "Newman" } };
//   let options = { upsert: true };
  
//   const docBefore = await collection.findOne(query);
//   await collection.updateOne(query, values, options);
//   const message = "has been updated to";
//   const docAfter = await collection.findOne(query);

//   Promise.all([docBefore, message, docAfter]).then((values) =>
//     console.log(values)
//   );
//   // console.log(beforeUpdate);
//   // console.log(res);
//   //close connection to db gets passed into this callback.
//   callback();
// };


// const deleteCustomers = async function (db, callback) {
//   const collection = db.collection("customers");

//   let deleted = await collection.deleteMany({});
//   console.log(deleted);
//   callback();
// };

// /***********Customer CRUD Ends********** */

// //CRUD for Products

// //C
// const insertProducts = function (db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection("products");
//   // Insert some documents
//   let insertProducts = products;
//   collection.insertMany(insertProducts, function (err, result) {
//     // using the assert module for testing
//     assert.strictEqual(err, null);
//     assert.strictEqual(10, result.result.n);
//     assert.strictEqual(10, result.ops.length);
//     // all good if we get to here
//     console.log("Inserted 10 document into the collection");
//     callback();
//   });
// };

// //R
// const findProducts = function (db, callback) {
//   const collection = db.collection("products");
//   //filters
//   const get_id = { id: 1, model: 1 };
//   const get_brand = { manufacturer: "SAMSUNG" };

//   collection
//     .find({})
//     // .project(get_id)
//     .toArray(function (err, docs) {
//       assert.strictEqual(err, null);
//       console.log("Found the following records");
//       console.log(docs);
//       callback(docs);
//     });
// };

// //U
// const updateProduct = async function (db, callback) {
//   const collection = db.collection("products");

//   let query = { model: "GALAXY A52 5G" };
//   let values = { $set: { price: "299.99" } };
//   let options = { upsert: true };

//   const docBefore = await collection.findOne(query);
//   await collection.updateOne(query, values, options);
//   const message = "has been updated to";
//   const docAfter = await collection.findOne(query);

//   Promise.all([docBefore, message, docAfter]).then((values) =>
//     console.log(values)
//   );
//   // console.log(beforeUpdate);
//   // console.log(res);
//   //close connection to db gets passed into this callback.
//   callback();
// };

// //D
// const deleteProducts = async function (db, callback) {
//   const collection = db.collection("item_details");

//   let deleted = await collection.deleteMany({});
  

//   callback();
// };

// //connecting to database, crud inside connection

// // client.connect(function (err) {
// //   assert.strictEqual(null, err);
// //   console.log("Connected!\n");

// //   const db = client.db(dbName);

// //   //CRUD for customers

// //   //C
// //   // insertCustomers(db, function() {
// //   //   client.close();
// //   // });

// //   //R
// //   // findCustomer(db, function () {
// //   //   client.close();
// //   // });

// //   //U
// //   // updateCustomer(db, function (){
// //   //   client.close();
// //   // });

// //   //D
// //   //deleteCustomers(db, function () {
// //   //    client.close();
// //   // });

// //   //******************************/

// //   //CRUD for products

// //   //C
// //   // insertProducts(db, function() {
// //   //   client.close();
// //   // });

// //   //R
// //   // findProducts(db, function () {
// //   //   client.close();
// //   // });

// //   //U
// //   // updateProduct(db, function () {
// //   //   client.close();
// //   // });

// //   //D
// //   //  deleteProducts(db, function () {
// //   //    client.close();
// //   //  });

// //   //*****************************/

// //   //CRUD for Orders

// //   //C
// //   // insertOrder(db, function () {
// //   //   client.close();
// //   // });

// //   //R
// //   // findOrder(db, function () {
// //   //   client.close();
// //   // });

// //   // customerHasOrder(db, function () {
// //   //   client.close();
// //   // });

// //   //U

// //   //D
// //   //  deleteOrders(db, function () {
// //   //    client.close();
// //   //  });
// // });


