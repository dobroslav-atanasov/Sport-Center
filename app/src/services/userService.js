import axios from 'axios';

const userService = {
    register: function (data) {
        const { username, password, firstName, lastName, email, age, gender } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/user/register',
            data: {
                username,
                password,
                firstName,
                lastName,
                email,
                age,
                gender
            }
        }).then(res => {
            console.log(res.data);
        });
    },

    login: function (data) {
        const { username, password } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/user/login',
            data: {
                username,
                password
            },
            withCredentials: true
        }).then(res => res.data);
    },

    logout: function () {
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/user/logout',
            withCredentials: true
        }).then(res => res.data);
    },

    getUsernames: function () {
        return axios({
            method: 'GET',
            url: 'http://localhost:3333/api/user/usernames'
        }).then(res => res.data);
    },

    getAllUsers: function () {
        return axios({
            method: 'GET',
            url: 'http://localhost:3333/api/user/all-users'
        }).then(res => res.data);
    },

    deleteUser: function (username) {
        return axios({
            method: 'DELETE',
            url: 'http://localhost:3333/api/user/delete-user',
            data: {
                username
            }
        }).then(res => res.data);
    },

    changeRole: function (username) {
        return axios({
            method: 'PUT',
            url: 'http://localhost:3333/api/user/change-role',
            data: {
                username
            }
        }).then(res => res.data);
    },

    getUser: function (userId){
        return axios({
            method: 'GET',
            url: `http://localhost:3333/api/user/get-user/${userId}`,
        }).then(res => res.data);
    }
};

export default userService;