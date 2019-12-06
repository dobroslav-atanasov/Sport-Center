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
    }
};

export default resultService;