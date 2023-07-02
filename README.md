## MWA - Homework - MongoDB
Given the two models `users` and `courses`. And another two sub-schemas of `lectures` and `questions`.
    
<ins>Design and Implement a Restful API using Express, Mongoose, and TypeScript for the following entities:</ins>
* Public `POST /auth/signup` route to add a new user (use `bcrypt` and `jsonwebtoken` to hash the password and generate a JWT).
* Public `POST /auth/signin` route to verify the user credentials (return JWT).
* Public `PUT /auth/password` route to change the password (return number of updated documents).
* Create a middleware to verify all <ins>private</ins> requests. Decrypt the JWT token, assign the token details to `req.body['token_data']`.

```diff
- READ QUERY AND RESPONSE REQUIREMENTS BELOW
```
<ins>Implement CRUD operations on the following private entities:</ins>
   * CRUD `courses`
      * add a new course (`code` and `title`). Fill out the `created_by` property from the JWT.
      * get paginated courses sorted from newest to oldest, without any `lectures` details.
      * get one course by ID.
      * update one course (`code` and `title`).
      * delete one course by ID.
   * CRUD `lectures`
      * add a new lecture (`title` and `description` and `file_url`).
      * get paginated lectures (use `$slice` projection operator to paginate over arrays).
      * get one lecture by ID.
      * update one lecture (`title` and `description` and `file_url`).
      * delete one lecture by ID.
   * CRUD `questions`
      * add a new question (`question` and `due_date`).
      * get paginated questions (use the `$` and `$slice` projection operators).
      * get one question by ID (you may temporary need to use a child process, ideally, an aggregation pipeline must be used)
      * update one question (`title` and `due_date`).
      * delete one question by ID. 
   
<ins>Geospacial implmentation:</ins>
* Implement a route to find the nearest 10 users that match a certain set of hobbies. You will need to create a `2d` and `text` indexes.
```diff
- QUERY AND RESPONSE REQUIREMENTS
```
* Only authenticated users may send requests to the <ins>private</ins> routes.
* Only the user who created the course should be able to perform `Create`/`Update`/`Delete` operations on `courses` and `lectures` and `questions`. However, anyone can `Read` the data.
* `GET` results must always be paginated.
* The standard response signature is `interface IResponse<T>{ success: boolean, results: T }`. Where `<T>` represents the returned type as follows:
   * `GET` all, must return `Entity[]` (with pagination).
   * `GET` one, must return `Entity`. (use child process for getting one question by id)
   * `POST` returns a `string` represents the `ObjectId` of the newly added object.
   * `PUT` returns a `number` of how many objects were modifed.
   * `DELETE` returns a `number` of how many objects were deleted/modifed.
  
