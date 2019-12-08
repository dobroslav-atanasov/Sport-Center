import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import eventService from '../../services/eventService';
import EventCard from '../Event/EventCard';
import Loading from '../Loading';

class Home extends React.Component {
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

    searchEvents = (e) => {
        e.preventDefault();
        const { events } = this.state;
        const search = e.target.value.toLowerCase();
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
        const user = authService.getUserInfo();
        const { events } = this.state;
        return (
            <Fragment>
                {user ?
                    events ?
                        <div className="container" style={{ marginBottom: 50 }}>
                            <div className="row" style={{ marginTop: 30, marginBottom: 20 }}>
                                <div className="col-md-4 offset-md-4">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fa fa-search"></i></span>
                                        </div>
                                        <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                {events.map(e => <EventCard id={e._id}
                                    name={e.name}
                                    description={e.description}
                                    location={e.location}
                                    town={e.town.name}
                                    imageUrl={e.town.imageUrl}
                                    date={e.date}
                                    participants={e.users.length} />)}
                            </div>
                        </div>
                        : <Loading />
                    : <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="card" style={{ width: 1000, marginLeft: 55 }}>
                            <img src="Sport-1.jpg" className="card-img-top" alt="sport-1" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Sport Center</h3>
                                <h5 className="card-text text-center">Great opportunities come to those who make the most of small ones.</h5>
                            </div>
                            <div className="text-center" style={{ marginTop: 10, marginBottom: 10 }}>
                                <Link to="/register">
                                    <button className="btn btn-danger btn-lg">
                                        Join
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        );
    };
};

export default Home;