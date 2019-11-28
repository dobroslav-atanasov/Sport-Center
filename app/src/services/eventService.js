import axios from 'axios';

const eventService = {
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
    }
};

export default eventService;