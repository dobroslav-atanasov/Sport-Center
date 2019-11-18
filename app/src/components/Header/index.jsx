import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <Link to="/" className="navbar-brand">Sport Data Center</Link>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/add-town" className="nav-link">Add Town</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;