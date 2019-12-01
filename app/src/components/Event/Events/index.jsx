import React from 'react';
import eventService from '../../../services/eventService';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    };

    componentWillMount = () => {
        eventService.getAllEvents()
            .then(events => {
                this.setState({ events: events });
            });
    };

    deleteEvent = (event) => {
        const id = event.target.id;
        eventService.deleteEvent(id)
            .then(data => {
                eventService.getAllEvents()
                    .then(events => {
                        this.setState({ events: events });
                    });
            });
    };

    render() {
        const { events } = this.state;
        return (
            <div className="container">
                <br />
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Event</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Town</th>
                            <th className="text-center">Delete Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(e => <tr>
                            <td className="text-center align-middle" key={e.name}>{e.name}</td>
                            <td className="text-center align-middle" key={e.date.toString()}>{new Date(e.date).getDate()}-{new Date(e.date).getMonth() + 1}-{new Date(e.date).getFullYear()}</td>
                            <td className="text-center align-middle" key={e.town.name.toString()}>{e.town.name}</td>
                            <td className="text-center align-middle" key={e.name.toString() + e.town.name.toString()}>
                                <button className="btn btn-danger btn-sm" id={e._id} onClick={this.deleteEvent}>
                                    Delete Event
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Events;