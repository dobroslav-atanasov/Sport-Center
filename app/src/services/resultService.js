import axios from 'axios';

const resultService = {
    add: function (eventId, userId, time) {
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/result/add',
            data: {
                eventId,
                userId,
                time
            }
        }).then(res => {
            console.log(res.data);
        });
    },

    getResultsByEvent: function (id) {
        return axios({
            method: 'GET',
            url: `http://localhost:3333/api/result/get-results/${id}`
        }).then(res => res.data);
    }
};

export default resultService;