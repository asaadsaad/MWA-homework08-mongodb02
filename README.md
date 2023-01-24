# MWA - Homework - Mongodb
## Exercise 01
Update the previous homework and use MongoDB for persisting the data in a collection (use Mongoose).

## MongoDB Geospacial Exercise (Optional)
Considering the following MongoDB schema for `geolocation` collection:
```javascript
{ name, category, location: [longitude, latitude]}
```
* Use [Compass](https://www.mongodb.com/try/download/compass) to insert a few locations around MIU campus, find the locations with Google Maps. *Note that Google Maps will give you coordination as `[Lat, Long]`. While MongoDB requires coordination to be saved as `[Long, Lat]`*   
* Add `2d` index to `geolocation` collection to activate searching by the `location` property.
* Write an API to find the nearest 3 points to MIU location `(lat: 41.017654, long: -91.9665342)`, Note that MIU location will be hard coded into your API, your search criteria may include a `category`.  
Example: `http://localhost:3000/search?category=restaurant` will find the nearest 3 restaurants to MIU campus.
  
