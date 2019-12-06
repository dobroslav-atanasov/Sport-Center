import React, { Fragment } from 'react';
import Loading from '../../Loading';
import resultService from '../../../services/resultService';
import eventService from '../../../services/eventService';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    };

    componentDidMount = () => {
        resultService.getResultsByEvent(this.state.id)
            .then(results => {
                this.setState({ results: results });
            });

        eventService.getEvent(this.state.id)
            .then(event => {
                console.log(event);
                this.setState({ event: event });
            });
    };

    render() {
        const { event, results } = this.state;
        return (
            <Fragment>
                {event ?
                    <div className="container">
                        <div className="row" style={{ marginTop: 30, marginBottom: 20 }}>
                            <div className="col-md-4 offset-md-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Username" />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3>{event.name}</h3>
                        </div>

                        <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center">Rank</th>
                                    <th className="text-center">Username</th>
                                    <th className="text-center">Full Name</th>
                                    <th className="text-center">Age</th>
                                    <th className="text-center">Gender</th>
                                    <th className="text-center">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {events.map(e => <tr>
                                    <td className="text-center align-middle" key={e.name}>{e.name}</td>
                                    <td className="text-center align-middle" key={e.date.toString()}>{new Date(e.date).getDate()}-{new Date(e.date).getMonth() + 1}-{new Date(e.date).getFullYear()}</td>
                                    <td className="text-center align-middle" key={e.town.name.toString()}>{e.town.name}</td>
                                </tr>)} */}
                            </tbody>
                        </table>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default Result;