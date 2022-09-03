const mongoose = require('mongoose');
const AddressSchema = require('../../models/address');
const { isValid } = require('../../modules/validateArray');
const router = require('express').Router({ mergeParams: true });

router.get('/', (req, res, next) => {
    AddressSchema.find().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    })
})
router.post('/add', (req, res, next) => {
    console.log('Add route requested.')
    const {
        streetAddress,
        cityName,
        provName,
        postalCode,
    } = req.body;
    /**Create an array of body values */
    let addressValues = [
        streetAddress,
        cityName,
        provName,
        postalCode
    ]
    /**Using array we parse through it to find datatypes we don't want */
    if (!isValid(addressValues)) {
        console.log(new Date() + ' Detected a missing field in body values.');
        res.status(400).send({ message: 'missing  address values.' });
    }

    /**Assign values */
    const address = new AddressSchema({
        streetAddress: streetAddress,
        cityName: cityName,
        provName: provName,
        postalCode: postalCode
    })
    /**save to db */
    address.save().then((result) => {
        res.status(201).send(address);
    }).catch((err) => {
        console.log(err);
        res.status(400).send({ message: 'Error' });
    })

})

module.exports = router;