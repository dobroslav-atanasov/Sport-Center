import React from 'react';
import userService from '../../services/userService';

const User = () => {
    const users = userService.load();
    console.log(users)

    return (
        <div>User</div>
    )
};

export default User;