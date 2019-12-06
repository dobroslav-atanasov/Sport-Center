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

    render() {
        const user = authService.getUserInfo();
        const { events } = this.state;
        return (
            <Fragment>
                {user ?
                    events ?
                        <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
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