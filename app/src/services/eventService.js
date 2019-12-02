import axios from 'axios';

const eventService = {
    create: function (data, creatorId) {
        const { name, date, description, town } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/event/create',
            data: {
                name,
                date,
                description,
                town,
                creatorId
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
    },

    getMyEvents: function (creatorId) {
        return axios({
            method: 'GET',
            url: 'http://localhost:3333/api/event/get-my-events',
            data: {
                creatorId
            }
        }).then(res => res.data);
    }
};

export default eventService;