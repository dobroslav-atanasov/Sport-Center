import React from 'react';
import EventInfo from '../EventInfo';
import eventService from '../../../services/eventService';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            event: {}
        };
    };

    componentWillMount = () => {
        eventService.getEvent(this.state.id)
            .then(event => {
                console.log(event);
                this.setState({ event: event });
            });
    };

    render() {
        const { event } = this.state;
        return (
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
        );
    };
};

export default Event;