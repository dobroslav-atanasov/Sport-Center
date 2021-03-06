import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <p>
                        <span>Powered by </span>
                        <i className="fa fa-github"></i><a href="https://github.com/dobroslav-atanasov" target="_black"> Dobroslav Atanasov </a>
                        <span>&copy; {new Date().getFullYear()} </span>
                    </p>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </footer>
    )
}

export default Footer;