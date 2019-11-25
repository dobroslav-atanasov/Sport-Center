import React from 'react';
import userService from '../../services/userService';

function Logout({ logout, history }) {
    logout(history);
    return null;
}

export default Logout;