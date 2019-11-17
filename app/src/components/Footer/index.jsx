import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                <span>Powered by </span>
                <i className="fa fa-github"></i><a href="https://github.com/dobroslav-atanasov" target="_black"> Dobroslav Atanasov </a>
                <span>&copy; 2019 </span>
            </p>
        </footer>
    )
}

export default Footer;