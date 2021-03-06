import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../../../services/eventService';
import authService from '../../../services/authService';
import Loading from '../../Loading';

class MyCreatedEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
        const creatorId = authService.getUserInfo().id;
        eventService.getAllEvents()
            .then(events => {
                const filterEvents = events.filter(x => x.creatorId === creatorId);
                this.setState({ events: filterEvents });
            });
    };

    searchEvents = (event) => {
        event.preventDefault();
        const { events } = this.state;
        const creatorId = authService.getUserInfo().id;
        const search = event.target.value.toLowerCase();
        if (search === '') {
            eventService.getAllEvents()
                .then(events => {
                    const filterEvents = events.filter(x => x.creatorId === creatorId);
                    this.setState({ events: filterEvents });
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
                                    <th className="text-center">Add Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map(e => <tr>
                                    <td className="text-center align-middle" key={e.name}>{e.name}</td>
                                    <td className="text-center align-middle" key={e.date.toString()}>{new Date(e.date).getDate()}-{new Date(e.date).getMonth() + 1}-{new Date(e.date).getFullYear()}</td>
                                    <td className="text-center align-middle" key={e.town.name.toString()}>{e.town.name}</td>
                                    {new Date(e.date) > Date.now() ?
                                        <td className="text-center align-middle" key={e.name}>Future Event</td>
                                        : <td className="text-center align-middle" key={e.name.toString() + e.town.name.toString()}>
                                            <Link to={`/add-result/${e._id}`}>
                                                <button className="btn btn-info btn-sm">
                                                    Add Result
                                        </button>
                                            </Link>
                                        </td>}
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

export default MyCreatedEvents;