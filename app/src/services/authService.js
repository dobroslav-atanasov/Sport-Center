import jwt from 'jsonwebtoken';

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
};

const authService = {
    getUserInfo: function () {
        const cookies = parseCookies();
        if (cookies['x-auth-token'] !== undefined) {
            return jwt.decode(cookies['x-auth-token']);
        }
        return undefined;
    }
};

export default authService;