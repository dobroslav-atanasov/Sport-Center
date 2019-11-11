import React from 'react';
import './styles.css';

class Footer extends React.Component {

    render() {
        return <footer className="footer">
            <p>
                <span>Powered by</span>
                <a href="https://github.com/dobroslav-atanasov" target="_black"> Dobroslav Atanasov </a>
                <span>&copy; 2019 </span>
            </p>
        </footer>
    }
};

export default Footer;