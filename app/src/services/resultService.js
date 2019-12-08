import axios from 'axios';

const resultService = {
    add: function (eventId, userId, time, rank) {
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/result/add',
            data: {
                eventId,
                userId,
                time,
                rank
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
    },

    getResultsByUser: function (id) {
        return axios({
            method: 'GET',
            url: `http://localhost:3333/api/result/get-my-results/${id}`
        }).then(res => res.data);
    }
};

export default resultService;