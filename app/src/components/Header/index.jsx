import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

const Header = () => {
    const user = authService.getUserInfo();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <Link to="/" className="navbar-brand"><img src="Sport-Center.png" width={40} /> Sport Center</Link>
            <div class="collapse navbar-collapse">
                {(user !== undefined && user.role === 'SuperAdmin') &&
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/add-town" className="nav-link">Add Town</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                    </ul>
                }
                {(user !== undefined && user.role === 'Admin') &&
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/create-event" className="nav-link">Create Event</Link>
                        </li>
                    </ul>
                }
                {(user !== undefined && user.role === 'User') &&
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/#" className="nav-link">Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/#" className="nav-link">My Events</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/#" className="nav-link">My Results</Link>
                        </li>
                    </ul>
                }
                {user !== undefined &&
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/#" className="nav-link">Hello {user.username}!</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                }
                {user === undefined &&
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    </ul>
                }
            </div>
        </nav >
    )
};

export default Header;