## MWA - Homework - MongoDB
Considering the following two schemas: `users` and `courses`. Example of the data:
```typescript
const users = [
   {
    _id: ObjectId("507f1f77bcf86cd799439011"),
    name: { first: "Asaad", last: "Saad" },
    email: "asaad@miu.edu",
    password: "$2b$10$UotIg3ZQ4wp9hpWp8HyTJOdZhVL6efbDh8z8KTN1Khj8MQbrO/fc6",
    location: [ -91.96746938624635, 41.01841654149492 ],
    hobbies: ["Play violin", "Running", "Swimming", "Cooking"]
   }
];

const courses = [
   {
    _id: ObjectId("507f191e810c19729de860ea"),
    code: "CS572",
    title: "Modern Web Application",
    teacher: { _id: ObjectId("507f1f77bcf86cd799439011"), name: { first: "Asaad", last: "Saad" }, email: "asaad@miu.edu" },
    lectures: [
       { title: "MongoDB part 1",
         description: "In this lecture you will learn main concepts of NoSQL databases and how to perform CRUD operations with Mongoose",
         file_url: "http://sakai.com/lecture06.pdf",
         questions: [
           { question: "How can we perform multiple updates on an array of elements?", due_date: 1688301486 },
           { question: "Write a query to return all clients with remaining balance.", due_date: 1688301486 },
         ],
       }
    ]
  }
];
```  
Design and Implement a Restful API using Express, Mongoose, and TypeScript for the following entities:
* Public `POST /auth/signup` route to add a new faculty (use `bcrypt` and `jsonwebtoken` to hash the password and generate a JWT).
* Public `POST /auth/signin` route to verify faculty credentials.
* Public `PUT /auth/password` route to change the password.
* Create a middleware that verifies all private requests.
* Implement CRUD operations on the following private entities:
   * CRUD `courses`
   * CRUD `lectures`
   * CRUD `questions`
* Implement a route to find the nearest 10 users that match certain set of hobbies.
  
**Notes:**
* Only the user who created the course should be able to perform CRUD operations on `lectures` and `questions`, 
* `GET` results must be paginated (use `$slice` projection operator to paginate over arrays), and sorted from newest to oldest.
* The standard response signature is `interface IResponse<T>{ success: boolean, results: T }`. Where `<T>` represents the returned type as follows:
   * `GET` all, must return `IEntity[]` (with pagination).
   * `GET` one, must return `IEntity`.
   * `POST` returns a `string` represents the `ObjectId` of the newly added object.
   * `PUT` returns a `number` of how many documents were updated.
   * `DELETE` returns a `number` of how many documents were deleted.
   * Use child process when applicable.
  
