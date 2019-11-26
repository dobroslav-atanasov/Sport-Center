import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

function protectedRoute(roles, inRole) {
    return function (Component) {
        return function ({ role, ...rest }) {
            if (inRole()) {
                return <Component {...rest} />;
            }
            return <Redirect to="/" />;
        };
    };
};

function authenticatedRoute(roles, inRole) {
    return function (Component) {
        return function ({ role, ...rest }) {
            if (inRole()) {
                return <Component {...rest} />;
            };
        };
        return <Redirect to="/login" />;
    };
};

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
};

function isSuperAdmin() {
    const cookies = parseCookies();
    if (cookies['x-auth-token'] !== undefined) {
        const data = jwt.decode(cookies['x-auth-token']);
        return data.role === 'SuperAdmin';
    }
    return false;
};

function isAdmin() {
    const cookies = parseCookies();
    if (cookies['x-auth-token'] !== undefined) {
        const data = jwt.decode(cookies['x-auth-token']);
        return data.role === 'Admin';
    }
    return false;
};

function isAuthenticated() {
    const cookies = parseCookies();
    return !!cookies['x-auth-token'];
};

function isNotAuthenticated() {
    const cookies = parseCookies();
    return !cookies['x-auth-token'];
};

export default {
    protectedRoute,
    authenticatedRoute,
    isSuperAdmin,
    isAdmin,
    isAuthenticated,
    isNotAuthenticated
};