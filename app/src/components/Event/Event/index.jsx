import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../../../services/eventService';
import authService from '../../../services/authService';
import Participants from '../../Participants';
import Loading from '../../Loading';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            userId: authService.getUserInfo().id
        };
    };

    componentDidMount = () => {
        eventService.getEvent(this.state.id)
            .then(event => {
                this.setState({ event: event });
            });
    };

    signUpEvent = () => {
        const userId = this.state.userId;
        const eventId = this.state.id;
        eventService.signUp(eventId, userId)
            .then(() => {
                eventService.getEvent(this.state.id)
                    .then(event => {
                        this.setState({ event: event });
                    });
            });
    };

    refuseEvent = () => {
        const userId = this.state.userId;
        const eventId = this.state.id;
        eventService.refuse(eventId, userId)
            .then(() => {
                eventService.getEvent(this.state.id)
                    .then(event => {
                        this.setState({ event: event });
                    });
            });
    };

    render() {
        const { event } = this.state;
        const isParticipate = event && event.users.map(u => u._id).includes(this.state.userId);
        const isCreator = event && event.creatorId === this.state.userId;
        const isValidEvent = event && new Date() > new Date(event.date);
        return (
            <Fragment>
                {event ?
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="col-md" style={{ marginBottom: 30 }}>
                                    <div className="card" style={{ width: 350 }}>
                                        <img className="card-img-top" src={event.town.imageUrl} alt={event.town.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{event.name}</h5>
                                            <p className="card-text">{event.description}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><b>Town:</b> {event.town.name}</li>
                                            <li className="list-group-item"><b>Location:</b> {event.location}</li>
                                            <li className="list-group-item"><b>Date:</b> {new Date(event.date).getDate()}-{new Date(event.date).getMonth() + 1}-{new Date(event.date).getFullYear()}</li>
                                            <li className="list-group-item"><b>Time:</b> {new Date(event.date).getHours()}:{new Date(event.date).getMinutes()}</li>
                                            <li className="list-group-item"><b>Participants:</b> {event.users.length}</li>
                                        </ul>
                                        <div className="card-body">
                                            {isValidEvent ?
                                                <Link to={`/result/${event._id}`}>
                                                    <button className="btn btn-success">
                                                        Result
                                                    </button>
                                                </Link>
                                                : isCreator ?
                                                    <button className="btn btn-warning">
                                                        You can not participate!
                                                        </button>
                                                    : (isParticipate && isParticipate === true) ?
                                                        <button className="btn btn-danger" onClick={this.refuseEvent}>
                                                            Refuse
                                                            </button>
                                                        : <button className="btn btn-info" onClick={this.signUpEvent}>
                                                            Sign Up
                                                            </button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="container">
                                    <div className="text-center">
                                        <h3>Participants</h3>
                                        <Participants participants={event.users} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default Event;