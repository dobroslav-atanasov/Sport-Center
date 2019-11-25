import React from 'react';
import userService from '../../services/userService';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }

    componentDidMount() {
        userService.logout().then(() => {
            this.setState({ isRedirect: true });
        });
    }

    render() {
        return (
            this.state.isRedirect && <Redirect to="/" />
        )
    }
}

// function Logout({ logout, history }) {
//     logout(history);
//     return null;
// }

export default Logout;