import React, { Fragment } from 'react';
import eventService from '../../../services/eventService';
import Loading from '../../Loading';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
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

    searchEvents = (event) => {
        event.preventDefault();
        const { events } = this.state;
        const search = event.target.value.toLowerCase();
        if (search === '') {
            eventService.getAllEvents()
                .then(events => {
                    this.setState({ events: events });
                });
        } else {
            const result = events.filter(x => x.name.toLowerCase().includes(search));
            this.setState({ events: result });
        }
    };

    render() {
        const { events } = this.state;
        return (
            <Fragment>
                {events ?

                    <div className="container">
                        <div className="row" style={{ marginTop: 30, marginBottom: 20 }}>
                            <div className="col-md-4 offset-md-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search" />
                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
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
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default Events;