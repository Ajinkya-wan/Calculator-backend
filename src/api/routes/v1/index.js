const express = require('express');

const router = express.Router();
const {
    mongo
} = require('../../config/vars');


if (mongo.enabled === 'true') {
    console.log("sdsd")
    const operationRoutes = require('./operation.route');
    router.use('/calculate', operationRoutes);

}

module.exports = router;
