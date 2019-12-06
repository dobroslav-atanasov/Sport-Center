import React from 'react';
import { Link } from 'react-router-dom';

class MyResults extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                <div className="row" style={{ marginBottom: 20, marginTop: 30 }}>
                    <div className="col-md-4">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Event" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Date" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input className="form-control mr-sm-2" type="search" name="search" onChange={this.searchEvents} placeholder="Search Position" />
                        </div>
                    </div>
                </div>

                <table class="table table-bordered bg-light">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center">Event</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Result</th>
                            <th className="text-center">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Link to="/">
                            <tr>
                                <td>Sofia Run</td>
                                <td>22.12.2019</td>
                                <td>12:55</td>
                                <td>1</td>
                            </tr>
                        </Link>
                    </tbody>
                </table>
            </div>
        );
    };
};

export default MyResults;