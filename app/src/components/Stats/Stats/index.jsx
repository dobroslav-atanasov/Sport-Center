import React, { Fragment } from 'react';
import PersonalInfo from '../PersonalInfo';
import userService from '../../../services/userService';
import authService from '../../../services/authService';
import Loading from '../../Loading';
import PersonalStats from '../PersonalStats';

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
        const userId = authService.getUserInfo().id;
        userService.getUser(userId)
            .then(user => {
                console.log(user);
                this.setState({ user: user });
            });
    };

    render() {
        const { user } = this.state;
        return (
            <Fragment>
                {user ?
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row">
                            <div className="col-md-5">
                                <PersonalInfo user={user} />
                            </div>
                            <div className="col-md-7">
                                <PersonalStats />
                            </div>
                        </div>
                    </div >
                    : <Loading />
                }
            </Fragment>
        );
    };
};

export default Stats;