const { isValid } = require('../../modules/validateArray');
const AddressSchema = require('../../models/address');
const { ObjectId } = require('mongodb');
const intiationSchema = require('../../models/initiation');

async function initiate(req, res, next) {
    const {
        name,
        descriptions,
        location,
        programType,
        details,
        topics
    } = req.body;
    let required = [
        name, descriptions, programType, details, topics
    ];
    if (!isValid(required)) {
        console.log(new Date() + ' Detected a missing field in body values.');
        res.status(400).send({ message: 'missing key values.' });
        return;
    }

    const initiation = new intiationSchema({
        name: name,
        descriptions: descriptions,
        location: location,
        programType: programType,
        details: details,
        topics: topics
    });
    if (location) {
        console.table(location);
    }

    initiation.save().then((result) => {
        res.status(201).send(initiation);
    }).catch((err) => {
        console.log(err);
        res.status(400).send({ message: 'Error' });
    });


}


/**helper functions */


module.exports = { initiate };