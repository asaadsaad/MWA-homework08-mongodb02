# MWA - Homework 08 - Mongodb 02
## Exercise 01
Please find below an Express application that connects to a local MongoDB instance, each document has the following structure for `schools` collection:
```JavaScript
{
    "_id":1,
    "teachers": [
        {"_id":1, "name":"Asaad"},
        {"_id":2, "name":"Unubold"}
    ],
    "courses":[
        {"_id":1, "students":[
            {"_id":1, "name":"Keith"},
            {"_id":2, "name":"Clyde"}
        ]},
        {"_id":2, "students":[
            {"_id":1, "name":"Bruce"},
            {"_id":2, "name":"Paul"}
        ]},
        {"_id":3, "students":[
            {"_id":1, "name":"Mrudula"},
            {"_id":2, "name":"Renuka"}
        ]}
    ]
}
```
Your are responsible on completing the code *(after line 50)* for 6 MongoDB queries within 6 pre-defined routes in `app.js` file:
1. Add teacher *(level 1)*
2. Update teacher by ID *(level 1)*
3. Delete teacher by ID *(level 1)*
4. Add a new student to specific course *(level 2)*
5. Update a student's name *(level 2)*
6. Delete a student *(level 2)*
  
Notice the `test.http` file which contains a test HTTP Client, and works with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VSCode.
  
## Exercise 02
Considering the following MongoDB schema for `exercise2` collection:
```javascript
{ name, category, location: [longitude, latitude]}
```
* Use [Compass](https://www.mongodb.com/try/download/compass) to insert a few locations around MIU campus, find the locations with Google Maps. *Note that Google Maps will give you coordination as `[Lat, Long]`. While MongoDB requires coordination to be saved as `[Long, Lat]`*   
* Add `2d` index to `exercise2` collection to activate searching by `location`.
* Write an API to find the nearest 3 points to MIU location `(lat: 41.017654, long: -91.9665342)`, Note that MIU location will be hard coded into your API, your search criteria may include a `category`.  
Example: `http://localhost:3000/search?category=restaurant` will find the nearest 3 restaurants to MIU campus.
  
