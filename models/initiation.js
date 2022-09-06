/**
 * Initiation schema 
 * @author LiamM
 * @module /models/initiation
 */
/**
 * Mongoose import
 * @const
 */
const mongoose = require('mongoose');
//define the structure of our db
const Schema = mongoose.Schema;


const intiationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide the name'],
    },
    descriptions: {
        type: String,
        required: [true, 'Please provide general description'],
    },
    location: {
        googleLocationCoordinates: { type: String },
        postalCode: { type: String },
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
    },
    programType: {
        type: String,
        require: [true, 'Please provide program type'],
    },
    details: String,
    topics: [{ type: String, required: [true, 'Please provide topic(s)'] }],
}, { timestamps: true })

module.exports = mongoose.model('initiation', intiationSchema);