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

    // searchEvents = (e) => {
    //     e.preventDefault();
    //     const { event } = this.state;
    //     const creatorId = authService.getUserInfo().id;
    //     const search = e.target.value.toLowerCase();
    //     if (search === '') {
    //         eventService.getAllEvents()
    //             .then(events => {
    //                 const filterEvents = events.filter(x => x.creatorId === creatorId);
    //                 this.setState({ events: filterEvents });
    //             });
    //     } else {
    //         const result = events.filter(x => x.name.toLowerCase().includes(search));
    //         this.setState({ events: result });
    //     }
    // };

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
                        <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                            <div className="col-md-4 offset-md-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
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