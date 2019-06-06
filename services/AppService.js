global.__base = `${__dirname}../../`;
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../config');
require('./PassportService');

const routes = require('../routes');

function run() {
    const app = express();

    app.set('root', __base);

    mongoose.set('useCreateIndex', true);
    mongoose.connect(config.db.mongo.url, {
        useNewUrlParser: true
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(cors());
    app.use(errorHandler());
    app.set('baseUrl', config.baseUrl);
    app.use(routes);


    app.listen(config.server.port, config.server.host, () => {
        console.log(`app running on http://${config.server.host}:${config.server.port}`);
    });
}

module.exports = {
    run
};