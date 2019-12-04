import React, { Fragment } from 'react';
import EventInfo from '../EventInfo';
import eventService from '../../../services/eventService';
import Participants from '../../Participants';
import Loading from '../../Loading';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    };

    componentDidMount = () => {
        eventService.getEvent(this.state.id)
            .then(event => {
                this.setState({ event: event });
            });
    };

    render() {
        const { event } = this.state;
        return (
            <Fragment>
                {event ?
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row">
                            <div className="col-md-4">
                                <EventInfo id={event.id}
                                    name={event.name}
                                    location={event.location}
                                    description={event.description}
                                    imageUrl={event.town.imageUrl}
                                    town={event.town.name}
                                    date={event.date}
                                    participants={event.users.length} />
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