import React, { Fragment, useState, useEffect } from 'react';
import PersonalInfo from '../PersonalInfo';
import userService from '../../../services/userService';
import authService from '../../../services/authService';
import Loading from '../../Loading';
import PersonalStats from '../PersonalStats';

const Stats = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const userId = authService.getUserInfo().id;
        userService.getUser(userId)
            .then(user => {
                setUser(user);
            });
    });

    return (
        <Fragment>
            {user ?
                <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                    <div className="row">
                        <div className="col-md-5">
                            <PersonalInfo user={user} />
                        </div>
                        <div className="col-md-7">
                            <PersonalStats user={user} />
                        </div>
                    </div>
                </div >
                : <Loading />
            }
        </Fragment>
    );
};

export default Stats;