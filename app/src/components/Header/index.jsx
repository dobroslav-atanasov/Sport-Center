import React from 'react';
import { Link } from 'react-router-dom';

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
};

const Header = () => {
    const cookies = parseCookies();
    const isLogged = !!cookies['x-auth-token'];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">            
            <Link to="/" className="navbar-brand"><img src="Sport-Center.png" width={40}/> Sport Center</Link>

            <div class="collapse navbar-collapse">
                {isLogged &&
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/add-town" className="nav-link">Add Town</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/create-event" className="nav-link">Create Event</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                    </ul>
                }
                {isLogged &&
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                }
                {!isLogged &&
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
        </nav>
    )
};

export default Header;