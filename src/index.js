const {
    mongo,
    port,
    env,
} = require("../src/api/config/vars");
const app = require('../src/api/config/express');
const mongoose = require('../src/api/config/mongoose');

// open mongoose connection
if (mongo.enabled === 'true') {
    console.log('mongo', typeof mongo.enabled);
    mongoose.connect();
}

/**
 * It starts the server on port
 */
function startServer() {
    // listen to requests
    app.listen(port, () => {
        console.log(`server started on port ${port} (${env})`);
        app.emit('app_started');

    });
}
// open mongoose connection
if (mongo.enabled === 'true') {
    mongoose.connect().then(startServer).catch((err) => {
        console.log('error', 'Server failed to start due to error: %s', err);
    });
}
/**
 * Exports express
 * @public
 */
module.exports = app;
