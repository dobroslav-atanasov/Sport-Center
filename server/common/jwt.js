const jwt = require('jsonwebtoken');
const secret = 'secret';

function create(payloads) {
    return jwt.sign(payloads, secret);
}

function verifyToken(token) {
    const id =jwt.verify(token, secret).id;
    return id;
}

module.exports = {
    create,
    verifyToken
}