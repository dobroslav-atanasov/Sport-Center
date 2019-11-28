import axios from 'axios';

const townService = {
    create: function (data) {
        const { name, country } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/town/create',
            data: {
                name,
                country
            }
        }).then(res => {
            console.log(res.data);
        });
    },

    getTowns: function() {
        return axios({
            method: 'GET',
            url: 'http://localhost:3333/api/town/',
        }).then(res => {
            return res.data;
        });
    }
};

export default townService;