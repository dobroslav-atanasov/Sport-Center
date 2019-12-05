import axios from 'axios';

const resultService = {
    add: function (userId, eventId, date) {
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/result/add',
            data: {
                userId,
                eventId,
                date
            }
        }).then(res => {
            console.log(res.data);
        });
    }
};

export default resultService;