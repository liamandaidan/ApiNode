const mongoose = require('mongoose');
const intiationSchema = require('../../models/initiation');
const { isValid } = require('../../modules/validateArray');
const router = require('express').Router({ mergeParams: true });

/**
 * Test without location and with location
 */
router.post('/add', (req, res, next) => {
    const {
        name,
        desc,
        location,
        programType,
        details,
        topic
    } = req.body;
    let required = [
        name, desc, programType, details, topic
    ];
    if (!isValid(required)) {
        console.log(new Date() + ' Detected a missing field in body values.');
        res.status(400).send({ message: 'missing key values.' });
    }

    if (location) {
        console.log(location.streetAddress);
    } else {
        console.log('does not exist');
    }

});

module.exports = router;