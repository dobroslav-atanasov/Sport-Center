import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading';
import eventService from '../../../services/eventService';
import authService from '../../../services/authService';

class MyEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
        const userId = authService.getUserInfo().id;
        eventService.getEventsByUserId(userId)
            .then(events => {
                this.setState({ events: events });
            });
    };

    searchEvents = (event) => {
        event.preventDefault();
        const { events } = this.state;
        const userId = authService.getUserInfo().id;
        const search = event.target.value.toLowerCase();
        if (search === '') {
            eventService.getEventsByUserId(userId)
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
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                            <div className="col-md-4 offset-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                                </div>
                            </div>
                        </div>

                        <div className="text-center" style={{ marginBottom: 30 }}>
                            <h3>My Events</h3>
                        </div>

                        <table class="table table-bordered bg-light">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center">Event</th>
                                    <th className="text-center">Town</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Participants</th>
                                    <th className="text-center">View Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(e =>
                                    <tr>
                                        <td className="text-center align-middle" key={e._id + e.name}>{e.name}</td>
                                        <td className="text-center align-middle" key={e._id + e.town.name}>{e.town.name}</td>
                                        <td className="text-center align-middle" key={e._id + e.date}>
                                            {new Date(e.date).getDate()}-{new Date(e.date).getMonth() + 1}-{new Date(e.date).getFullYear()}</td>
                                        <td className="text-center align-middle" key={e._id + e.users}>{e.users.length}</td>
                                        <td className="text-center align-middle" key={e._id}>
                                            {e.results.length !== 0 ?
                                                <Link to={`/result/${e._id}`}>
                                                    <button className="btn btn-success">
                                                        Result
                                                </button>
                                                </Link>
                                                : 'Future Event'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default MyEvents;