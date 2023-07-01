# MWA - Homework - Mongodb
## Exercise
Considering the following interfaces:
```typescript
interface IFaculty { name: IName, email: string, password: string }
interface ICourse { code: string, title: string, students: IStudent[] }
interface IStudent { name: IName, exams: IExam[] }
interface IName { first: string, last: string }
interface IExam { date: number, grade: number }
```
Design a Restful API using Express, Mongosee, and TypeScript for the following entities:
* CRUD faculty + signin/signup
* CRUD courses
* CRUD students
* CRUD exams

**Notes:**
* All `GET` requests must be paginated, use a page size of 5. Use `$slice` projection operator to paginate over arrays.
* All `PATCH` requests must partially update an entity.
* All results must be sorted from newest to oldest.
* Queries must be projected to only return the requested information.
* In most cases, the DB server must prepare the results and Node must not manipulate the results. If you neeUse child process when applicable.

## MongoDB Geospacial Exercise (Extra)
Considering the following MongoDB schema for `geolocation` collection:
```javascript
{ name, category, location: [longitude, latitude]}
```
* Use [Compass](https://www.mongodb.com/try/download/compass) to insert a few locations around MIU campus, find the locations with Google Maps. *Note that Google Maps will give you coordination as `[Lat, Long]`. While MongoDB requires coordination to be saved as `[Long, Lat]`*   
* Add `2d` index to `geolocation` collection to activate searching by the `location` property.
* Write an API to find the nearest 3 points to MIU location `(lat: 41.017654, long: -91.9665342)`, Note that MIU location will be hard coded into your API, your search criteria may include a `category`.  
Example: `http://localhost:3000/search?category=restaurant` will find the nearest 3 restaurants to MIU campus.
  
