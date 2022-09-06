const mongoose = require('mongoose');
const intiationSchema = require('../../models/initiation');
const { isValid } = require('../../modules/validateArray');
const { initiate } = require('../services/initationService');
const router = require('express').Router({ mergeParams: true });

/**
 * Test without location and with location
 */
router.post('/add', initiate);

module.exports = router;