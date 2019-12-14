import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

const Header = () => {
    const user = authService.getUserInfo();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <Link to="/" className="navbar-brand"><img src="Sport-Center.png" width={40} alt="Sport-Center" /> Sport Center</Link>
            <div className="collapse navbar-collapse">
                {(user !== undefined && user.role === 'SuperAdmin') &&
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/add-town" className="nav-link"><i className="fa fa-building"></i> Add Town</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/users" className="nav-link"><i class="fa fa-users"></i> All Users</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/super-admin-events" className="nav-link"><i class="fa fa-calendar"></i> All Events</Link>
                        </li>
                    </ul>
                }
                {(user !== undefined && user.role === 'Admin') &&
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/create-event" className="nav-link"><i className="fa fa-etsy"></i> Create Event</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/my-created-events" className="nav-link"><i class="fa fa-calendar"></i> My Created Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/my-events" className="nav-link"><i class="fa fa-calendar"></i> My Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/my-results" className="nav-link"><i class="fa fa-address-book"></i> My Results</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/stats" className="nav-link"><i class="fa fa-signal"></i> Stats</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/standings" className="nav-link"><i class="fa fa-list-ol"></i> Standings</Link>
                        </li>
                    </ul>
                }
                {(user !== undefined && user.role === 'User') &&
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/my-events" className="nav-link"><i class="fa fa-calendar"></i> My Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/my-results" className="nav-link"><i class="fa fa-address-book"></i> My Results</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/stats" className="nav-link"><i class="fa fa-signal"></i> Stats</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/standings" className="nav-link"><i class="fa fa-list-ol"></i> Standings</Link>
                        </li>
                    </ul>
                }
                {user !== undefined &&
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/#" className="nav-link"><i class="fa fa-user"></i> Hello{user.role === 'Admin' && ' Admin'} {user.username}!</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/logout" className="nav-link"><i class="fa fa-user-times"></i> Logout</Link>
                        </li>
                    </ul>
                }
                {user === undefined &&
                    <Fragment>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/about" className="nav-link"><i class="fa fa-info"></i> About Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link"><i class="fa fa-user"></i> Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/register" className="nav-link"><i class="fa fa-user-plus"></i> Register</Link>
                            </li>
                        </ul>
                    </Fragment>
                }
            </div>
        </nav >
    );
};

export default Header;