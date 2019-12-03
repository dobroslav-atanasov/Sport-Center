import React, { Fragment } from 'react';
import EventInfo from '../EventInfo';
import eventService from '../../../services/eventService';
import ReactLoading from 'react-loading';

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
                this.setState({ event });
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
                                sdfsd
                                </div>
                        </div>
                    </div>
                    : <div className="container" style={{ marginTop: 30, marginBottom: 50, width: 100, height: 100 }}>
                        <ReactLoading type="spin" color="#dc3545" />
                        <p className="text-danger">
                            Loading...
                        </p>
                    </div>
                }
            </Fragment>
        );
    };
};

export default Event;