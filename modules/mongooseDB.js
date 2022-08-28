const mongoose = require('mongoose');
const Note = require('../models/note');
const router = require('express').Router({ mergeParams: true });

async function main() {
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    */
    //later will use a .env but for the moment i dont mind showing locally
    const USERNAME = 'm001-student';
    const PASS = 'm001-mongodb-basics';
    const DB = 'note-test';

    const uri = `mongodb+srv://${USERNAME}:${PASS}@sandbox.gswh57a.mongodb.net/${DB}?retryWrites=true&w=majority`;
    mongoose.connect(uri).then((res) => {
        console.log('Connected to DB!');
    }).catch((err) => {
        console.log(err);
    });

}


router.get('/', (req, res, next) => {
    res.status(200).send('hi');
})
/**
 * Find all notes and send
 */
router.get('/all', (req, res, next) => {
    Note.find().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/find/:title', (req, res, next) => {
    const title = req.params.title;
    Note.find({ title: title }).then((result) => {
        res.status(200).send(result);


    }).catch((err) => {
        console.log(err);
    })
})
/**
 * Add note
 */
router.post('/add/:title', (req, res, next) => {
    const note = new Note({
        title: req.params.title,
        snippet: 'My first note',
        body: 'Hello World!'
    });
    note.save().then((result) => {
        res.status(201).send(note);
    }).catch((err) => {
        console.log(err);
    });

})

module.exports = router;
module.exports.main = main;
