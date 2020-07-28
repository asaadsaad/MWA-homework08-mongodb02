const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const app = express();

//////////////////////////////////////
////////////// DO NOT TOUCH //////////
/////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('rich');
            req.db = db.collection('schools');
            next();
        });
    } else {
        req.db = db.collection('schools');
        next();
    }
})
////////////// DO NOT TOUCH //////////
// Get all data - FOR TESTING PURPOSES ONLY
app.get('/', (req, res) => {
    req.db.find({}).toArray((err, data) => res.json(data))
})
////////////// DO NOT TOUCH //////////
// delete all data - FOR TESTING PURPOSES ONLY
app.delete('/clear', async (req, res) => {
    await req.db.removeMany({})
    req.db.find({}).toArray((err, data) => res.json(data))

})
////////////// DO NOT TOUCH //////////
// fill with dummy data - FOR TESTING PURPOSES ONLY
app.post('/fill', async (req, res) => {
    await req.db.insertOne(req.body, (err, results) => res.json(results))
});

//////////////////////////////////////
////////////// YOUR CODE BELOW ///////
/////////////////////////////////////
// NOTE: all params are fetched as String /////////////////////////
// You will need to parse them as numbers before using them ///////
// Example: {_id: parseInt(req.params.teacher_id)} ////////////////
//////////////////////////////////////////////////////////////////

// Add teacher
app.post('/schools/:school_id/teachers', async (req, res) => {
    // YOUR QUERY HERE
    req.db.find({}).toArray((err, data) => res.json(data))
})
// Update teacher by ID
app.patch('/schools/:school_id/teachers/:teacher_id', async (req, res) => {
    // YOUR QUERY HERE
    req.db.find({}).toArray((err, data) => res.json(data))
})
// Delete teacher by ID
app.delete('/schools/:school_id/teachers/:teacher_id', async (req, res) => {
    // YOUR QUERY HERE
    req.db.find({}).toArray((err, data) => res.json(data))
})

// Add a new student to specific course
app.post('/schools/:school_id/courses/:course_id', async (req, res) => {
    // YOUR QUERY HERE
    req.db.find({}).toArray((err, data) => res.json(data))
})


// Update a student's name
app.patch('/schools/:school_id/courses/:course_id/:student_id', async (req, res) => {
    // YOUR QUERY HERE  
    req.db.find({}).toArray((err, data) => res.json(data))
})

// Delete a student
app.delete('/schools/:school_id/courses/:course_id/:student_id', async (req, res) => {
    // YOUR QUERY HERE
    req.db.find({}).toArray((err, data) => res.json(data))
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('listening to 3000'));
