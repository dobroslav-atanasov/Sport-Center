import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import jwt from 'jsonwebtoken';

// const AdminRoute = protectedRoute(['Admin'], isAdmin);
function protectedRoute(allowedRoles, inRole) {
    return function (WrappedComponent) {
        return function ({ role, ...rest }) {
            if (inRole()) {
                return <WrappedComponent {...rest} />;
            }
            // toast.warn('You can\'t access this route!', {
            //     position: toast.POSITION.TOP_RIGHT,
            //     autoClose: 5000
            // });
            return <Redirect to="/" />
        };

    };

}
function authedRoute(allowedRoles, inRole) {
    return function (WrappedComponent) {
        return function ({ role, ...rest }) {
            if (inRole()) {
                return <WrappedComponent {...rest} />;
            }
            // toast.warn('You can\'t access this route!', {
            //     position: toast.POSITION.TOP_RIGHT,
            //     autoClose: 5000
            // });
            return <Redirect to="/login" />
        };

    };

}
function isAdmin() {
    // let roles = localStorage.getItem('roles');
    // if (!roles) {
    //     return false;
    // }
    // return roles.includes('SuperAdmin');
    const cookies = parseCookies();
    if (cookies['x-auth-token'] !== undefined) {
        const data = jwt.decode(cookies['x-auth-token']);
        return data.role === 'SuperAdmin';
    }
    return false;
}

function isAuthed(Component) {
    const cookies = parseCookies();
    return !!cookies['x-auth-token'];
}

function isNotAuthed(Component) {
    const cookies = parseCookies();
    return !cookies['x-auth-token'];
}

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
};

export {
    isAuthed, isNotAuthed, protectedRoute, isAdmin, authedRoute
}