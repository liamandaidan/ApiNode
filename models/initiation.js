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
//describe structure of  our collection
/**
 * Address schema import
 * @see module:/models/address
 */
const addressSchema = require('./address');


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
        type: {type: Schema.ObjectId, ref: 'addresses'}
    },
    programType: {
        type: String,
        require: [true, 'Please provide program type'],
    },
    details: String,
    topics: [{ type: String, required: [true, 'Please provide topic(s)'] }],
}, { timestamps: true })

module.exports = mongoose.model('initiation', intiationSchema);