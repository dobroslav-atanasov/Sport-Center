import React, { Fragment } from 'react';
import Loading from '../../Loading';

class MyEvents extends React.Component {

    render() {
        return (
            <Fragment>
                {/* {results ? */}
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                            <div className="col-md-4 offset-4">
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                                </div>
                            </div>
                        </div>

                        <div className="text-center" style={{ marginBottom: 30 }}>
                            <h3>My Events</h3>
                        </div>

                        <table class="table table-bordered bg-light">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center">Event</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {results.map(r =>
                                    <tr>
                                        <td className="text-center align-middle" key={r._id}>{r.event.name}</td>
                                        <td className="text-center align-middle" key={r._id + r.event.date}>
                                            {new Date(r.event.date).getDate()}-{new Date(r.event.date).getMonth() + 1}-{new Date(r.event.date).getFullYear()}</td>
                                        <td className="text-center align-middle" key={r._id + r.time}>{r.time}</td>
                                    </tr>
                                )} */}
                            </tbody>
                        </table>
                    </div>
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default MyEvents;