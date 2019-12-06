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
        const { dictionary } = this.state;

        for (const id in dictionary) {
            const value = dictionary[id];
            resultService.add(this.state.eventId, id, value);
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
                    <div className="container">
                        <table className="table table-bordered table-striped" style={{ marginTop: 30, marginBottom: 50 }}>
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
                                        <input type="text" className="form-control" name={u._id} onChange={this.changeHandler} />
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