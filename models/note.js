const mongoose = require('mongoose');
//define the structure of our db
const Schema = mongoose.Schema;
//describe structure of  our collection
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);
module.exports= Note;