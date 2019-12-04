import axios from 'axios';

const eventService = {
    create: function (data, creatorId) {
        const { name, location, date, description, town } = data;
        return axios({
            method: 'POST',
            url: 'http://localhost:3333/api/event/create',
            data: {
                name,
                location,
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
    },

    getEvent: function (id) {
        return axios({
            method: 'GET',
            url: `http://localhost:3333/api/event/get-event/${id}`
        }).then(res => res.data);
    },

    signUp: function (eventId, userId) {
        return axios({
            method: 'PUT',
            url: 'http://localhost:3333/api/event/sign-up',
            data: {
                eventId,
                userId
            }
        }).then(res => res.data);
    },

    refuse: function (eventId, userId) {
        return axios({
            method: 'PUT',
            url: 'http://localhost:3333/api/event/refuse',
            data: {
                eventId,
                userId
            }
        }).then(res => res.data);
    }
};

export default eventService;