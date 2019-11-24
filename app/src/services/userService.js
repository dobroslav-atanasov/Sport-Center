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
        const {username, password} = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/user/login',
            data: {
                username,
                password
            },
            withCredentials: true
        }).then(res => res.data);
    }
};

export default userService;