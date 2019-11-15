const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {
    app.use(cookieParser());
    app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false, partialsDir: __basedir + '/views/partials' }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__basedir, 'static')));
    app.set('views', path.resolve(__basedir, 'views'));
    app.use(cors())
};