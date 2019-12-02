import React from 'react';
import eventService from '../../../services/eventService';
import authService from '../../../services/authService';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    };

    componentWillMount = () => {
        const creatorId = authService.getUserInfo().id;
        eventService.getAllEvents()
            .then(events => {
                const filterEvents = events.filter(x => x.creatorId === creatorId);
                this.setState({ events: filterEvents });
            });
    };

    render() {
        const { events } = this.state;
        return (
            <div className="container">
                <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                    <div className="col-md-4 offset-md-4">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
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
        );
    };
};

export default Results;