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

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>

                <Link to="/">
                    <table class="table table-bordered bg-light">
                        <tbody>
                            <tr>
                                <td><b>Event:</b> Sofia Run</td>
                                <td><b>Date:</b> 22.12.2019</td>
                                <td><b>Result:</b> 12:55</td>
                                <td><b>Position:</b> 1</td>
                            </tr>
                        </tbody>
                    </table>
                </Link>
            </div>
        );
    };
};

export default MyResults;