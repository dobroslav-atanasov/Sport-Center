const jwt = require('../common/jwt');

function checkForAuthentication(req, res) {
    if (req.cookies['auth-token'] !== undefined) {
        const userId = jwt.verifyToken(req.cookies['auth-token']);
        return userId;
    }

    return undefined;
}

module.exports = {
    checkForAuthentication
};