const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cookieParser(secret));
    app.use(bodyParser.json());/*.urlencoded({ extended: false }));*/
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
};