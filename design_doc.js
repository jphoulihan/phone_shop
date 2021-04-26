
# Summary of system, archicture.Application

Application:
    - technologies:
        - Express .js
        - Javascript 
        - discuss two layer / 2 tier architecture. controller (api)/persistence(db)

        - alternatives: 
            - could have used typescript - Typescript, benefits of strongly typed languages.
            - we could have used mongoose schema to enforce database consistency but we did not.
            - HTTP DELETE method - idempotency.
            
            - Data model design 
            - NoSQL, vs Relational: differences 
            - excel screenshot
                - Collections - name of collections 
                - Collections - properties and description <key>: <description>
    - README: 
    depenenceies
        - how to install application
            - install mongo
            - npm install node 
            - npm install Express
            - npm install mongodb 
            - bodyparser
            - mongogoose: ObjectId - was it necessary to install npm mongoose.

        - how to start: 
            npm install above dependencies
            run this <load_db.ps> script

        - mention postman collections: postman (bonus points for creating and submitting the postman collection)

        - docs: provided in ascii doc format - to view formatting install asscidoc extension

-----

> api
    - customers-api
        - create: PUT,POST
        - read: GET
        - update: PATCH  
        - delete: DELETE 

    - orders-api

    - products-api


> db 


