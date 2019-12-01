import axios from 'axios';

const eventService = {
    create: function (data) {
        const { name, date, town } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/event/create',
            data: {
                name,
                date,
                town
            }
        }).then(res => {
            console.log(res.data);
        });
    },

    getAllEvents: function () {
        return axios({
            method: 'GET',
            url: 'http://localhost:3333/api/event/all-events'
        }).then(res => res.data);
    },

    deleteEvent: function (id) {
        return axios({
            method: 'DELETE',
            url: 'http://localhost:3333/api/event/delete-event',
            data: {
                id
            }
        }).then(res => res.data);
    }
};

export default eventService;