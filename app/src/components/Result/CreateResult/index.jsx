import React, { Fragment } from 'react';
import Loading from '../../Loading';
import eventService from '../../../services/eventService';
import resultService from '../../../services/resultService';

class CreateResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.match.params.id,
            dictionary: {}
        };
    };

    componentDidMount = () => {
        eventService.getEvent(this.state.eventId)
            .then(event => {
                this.setState({ event: event });
            });
    };

    addResult = () => {
        const { dictionary, event, eventId } = this.state;
        const day = new Date(event.date).getDate();
        const month = new Date(event.date).getMonth();
        const year = new Date(event.date).getFullYear();

        let results = [];
        for (const userId in dictionary) {
            const value = dictionary[userId];
            const parts = value.split(':');
            const time = new Date(year, month, day, +parts[0], +parts[1], +parts[2]);

            let result = {
                event: eventId,
                user: userId,
                time: time
            };
            results.push(result);
        };

        results.sort(function (d1, d2) {
            return new Date(d1.time) - new Date(d2.time);
        });

        let rank = 1;
        for (const result of results) {
            const score = (50 / rank).toFixed(0);
            resultService.add(result.event, result.user, result.time, rank, score);
            rank++;
        };

        this.props.history.push('/');
    };

    changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let currentDict = this.state.dictionary;
        currentDict[name] = value;
        this.setState({ dictionary: currentDict });
    };

    render() {
        const { event } = this.state;
        return (
            <Fragment>
                {event ?
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="text-center" style={{ marginBottom: 30 }}>
                            <h3>Add Event Results: {event.name}</h3>
                        </div>
                        <table className="table table-bordered table-striped" >
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center">Username</th>
                                    <th className="text-center">Full Name</th>
                                    <th className="text-center">Gender</th>
                                    <th className="text-center">Age</th>
                                    <th className="text-center">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {event.users.map(u => <tr>
                                    <td className="text-center align-middle" key={u.username}>{u.username}</td>
                                    <td className="text-center align-middle" key={u.firstName + u.lastName}>{u.firstName} {u.lastName}</td>
                                    <td className="text-center align-middle" key={u.username + u.gender}>{u.gender}</td>
                                    <td className="text-center align-middle" key={u.username + u.age}>{u.age}</td>
                                    <td className="text-center align-middle" key={u.username + 'result'}>
                                        <input type="text" className="form-control" name={u._id} onChange={this.changeHandler} placeholder="hh:mm:ss" />
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                        <div className="text-center">
                            <button className="btn btn-info btn-lg" onClick={this.addResult}>
                                Add Result
                        </button>
                        </div>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default CreateResult;