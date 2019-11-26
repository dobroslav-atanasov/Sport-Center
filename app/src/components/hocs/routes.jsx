import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
};

const routes = {
    protectedRoute: function (roles, inRole) {
        return function (Component) {
            return function ({ role, ...rest }) {
                if (inRole()) {
                    return <Component {...rest} />;
                }
                return <Redirect to="/" />;
            };
        };
    },

    userRoute: function (roles, inRole) {
        return function (Component) {
            return function ({ role, ...rest }) {
                if (inRole()) {
                    return <Component {...rest} />;
                };
                return <Redirect to="/login" />;
            };
        };
    },

    isSuperAdmin: function () {
        const cookies = parseCookies();
        if (cookies['x-auth-token'] !== undefined) {
            const data = jwt.decode(cookies['x-auth-token']);
            return data.role === 'SuperAdmin';
        }
        return false;
    },

    isAdmin: function () {
        const cookies = parseCookies();
        if (cookies['x-auth-token'] !== undefined) {
            const data = jwt.decode(cookies['x-auth-token']);
            return data.role === 'Admin';
        }
        return false;
    },

    isAuthenticated: function () {
        const cookies = parseCookies();
        return !!cookies['x-auth-token'];
    },

    isNotAuthenticated: function () {
        const cookies = parseCookies();
        return !cookies['x-auth-token'];
    }
};

export default routes;