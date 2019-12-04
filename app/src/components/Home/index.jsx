import React, { Fragment } from 'react';
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
                {user === undefined &&
                    <Fragment>
                        <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                            <div className="row align-items-center">
                                <div className="col-md">
                                    <div className="card" style={{ width: 350 }}>
                                        <img src="Sport-2.jpg" className="card-img-top" alt="sport-2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="card" style={{ width: 350 }}>
                                        <img src="Sport-3.jpg" className="card-img-top" alt="sport-3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="card" style={{ width: 350 }}>
                                        <img src="Sport-1.jpg" className="card-img-top" alt="sport-1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                }
                {user && events ?
                    <Fragment>
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
                    </Fragment>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default Home;