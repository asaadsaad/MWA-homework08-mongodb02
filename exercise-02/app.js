const express = require('express');
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017', { useUnifiedTopology: true, useNewUrlParser: true });
let db;
(async function () {
    try {
        await client.connect()
        await client.db("rich").command({ ping: 1 });
        console.log("Connected successfully to DB server");
        db = await client.db('rich');
    } catch (e) {
        console.log(e)
        process.exit(0)
    }
})()
const app = express();

//////////////////////////////////////
////////////// DO NOT TOUCH //////////
/////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (db) {
        req.db = db.collection('rich');
        next();
    } else {
        next(new Error(`No Database`))
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
app.patch('/schools/:school_id/courses/:course_id/students/:student_id', async (req, res) => {
    // YOUR QUERY HERE  
    req.db.find({}).toArray((err, data) => res.json(data))
})

// Delete a student
app.delete('/schools/:school_id/courses/:course_id/students/:student_id', async (req, res) => {
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

process.on('exit', () => {
    client.close()
})
