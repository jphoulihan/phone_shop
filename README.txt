This solution was developed with a local installation of MongoDB, specifically MongoDB shell version v4.2.6

*******************-FOR TESTER-******************

In db folder please find customers and products 'data dump' in customers.js and products.js
uncomment code block at top of database.js as specified, contents of customers and products can be 
copy pasted into their respective insertMany statements in databse.js
once inserted please comment out this code block and begin testing the api solution.

all endpoints tested with postman, see postman file for details, 
import postman folder to postman for testing 


Summary of technologies used

Application:
    - frameworks used:
        - Express, express.Router also used
        - Mongoose (used for mongoose.Types.ObjectId to pass around object ids
            when finding by id/patching/deleting)  
    - README: 
    dependencies
            - install mongo
            - npm install node 
            - npm install Express
            - npm install mongodb 
            - bodyparser
            - mongoose: (to use ObjectId. as stated above)
