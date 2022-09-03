/**
 * Adress schema
 * @module /models/address
 * @author LiamM
 */
/**
 * Mongoose import
 * @const
 */
const mongoose = require('mongoose');
/**
 * Validator import
 * @const
 */
const validator = require('validator');
/**
 * mongoose schema object
 * @const
 */
const Schema = mongoose.Schema;
/**
 * Address schema.
 * @todo I am assuming address will be in Canada
 */
const addressSchema = new Schema({
    streetAddress: {
        type: String,
        required: [true, 'Please enter a street address'],
        maxlength: [100, 'Please keep address under 100 characters']
    },
    cityName: {
        type: String,
        required: [true, 'Please enter a City'],
        minlength: [2, 'Minimum city length is 2 characters'],
        maxlength: [85, 'Maximum city length is 85 characters.']
    },
    provName: {
        type: String,
        maxlength: [2, 'Please enter a province name'],
        uppercase: true,
        validate: [validator.isAlpha, 'Please enter a province, letters only']
    },
    postalCode: {
        type: String,
        required: [true, 'Please enter a postal code'],
        minlength: [6, 'Minimum Postal Code length is 6 characters'],
        maxlength: [6, 'Maximum postal Code length is 6 characters'],
        validate: [
            {
                validator: (value) => validator.isPostalCode(value, ['CA']),
                msg: 'Invalid postal code'
            }
        ]
    },
    country: {
        type: String,
        default: 'Canada',
        required: [true, 'Please Enter a Country'],
    }
})

module.exports = mongoose.model('address', addressSchema);