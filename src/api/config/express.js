const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes/v1');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swaggerJson');
const useragent = require('express-useragent');
/**
 * Express instance
 * @public
 */
const app = express();
app.use(useragent.express());

// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 100000,
}));

// enable CORS - Cross Origin Resource Sharing
app.use(cors({ credentials: true, origin: true }));

// mount api v1 routes
app.use('/api/v1', routes);

// Serving Swagger Docs through here
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;
