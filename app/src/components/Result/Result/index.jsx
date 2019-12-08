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
                eventService.getEvent(this.state.id)
                    .then(event => {
                        this.setState({ results: results, event: event });
                    });
            });
    };

    generateUserResults = () => {
        const { results } = this.state;
        if (results) {
            let users = [];

            for (const result of results) {
                const user = {
                    username: result.user.username,
                    fullName: `${result.user.firstName} ${result.user.lastName}`,
                    age: result.user.age,
                    gender: result.user.gender,
                    time: new Date(result.time)
                };
                users.push(user);
            };

            users.sort(function (d1, d2) {
                return new Date(d1.time) - new Date(d2.time);
            });

            return users;
        }

        return undefined;
    };

    render() {
        const { event } = this.state;
        const users = this.generateUserResults();
        return (
            <Fragment>
                {event ?
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="text-center" style={{ marginBottom: 20 }}>
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
                                {users.map((u, index) =>
                                    <tr>
                                        <td className="text-center align-middle" key={u.rank + u.username}>{index + 1}</td>
                                        <td className="text-center align-middle" key={u.username}>{u.username}</td>
                                        <td className="text-center align-middle" key={u.fullName}>{u.fullName}</td>
                                        <td className="text-center align-middle" key={u.username + u.age}>{u.age}</td>
                                        <td className="text-center align-middle" key={u.username + u.gender}>{u.gender}</td>
                                        <td className="text-center align-middle" key={u.username + index}>
                                            {new Date(u.time).getHours()}:{new Date(u.time).getMinutes()}:{new Date(u.time).getSeconds()}</td>
                                    </tr>
                                )}
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