import React, { Fragment, useState, useEffect } from 'react';
import PersonalInfo from '../PersonalInfo';
import userService from '../../../services/userService';
import authService from '../../../services/authService';
import Loading from '../../Loading';
import PersonalStats from '../PersonalStats';
import StatsContext from '../StatsContext';

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
                <StatsContext.Provider value={user}>
                    <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                        <div className="row">
                            <div className="col-md-5">
                                <PersonalInfo />
                            </div>
                            <div className="col-md-7">
                                <PersonalStats />
                            </div>
                        </div>
                    </div >
                </StatsContext.Provider>
                : <Loading />
            }
        </Fragment>
    );
};

export default Stats;