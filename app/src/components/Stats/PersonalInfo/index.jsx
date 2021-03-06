import React, { Fragment } from 'react';
import StatsContext from '../StatsContext';

const PersonalInfo = () => {
    const user = React.useContext(StatsContext);

    return (
        <Fragment>
            <h3>
                Personal Info
            </h3>
            <div className="card" style={{ width: 350 }}>
                <img src="Sport-3.jpg" className="card-img-top" alt="sport-3" />
                <div className="card-body">
                    <h6 className="card-title"><b>Username:</b> {user.username}</h6>
                    <h6 className="card-title"><b>Full Name:</b> {user.firstName} {user.lastName}</h6>
                    <h6 className="card-title"><b>Age:</b> {user.age}</h6>
                    <h6 className="card-title"><b>Gender:</b> {user.gender}</h6>
                    <h6 className="card-title"><b>Total Points:</b> {user.points}</h6>
                    <h6 className="card-title"><b>Total Participants</b> {user.results.length}</h6>
                    <h6 className="card-title"><b>Total Kilometers:</b> {user.results.length * 5}</h6>
                </div>
            </div>
        </Fragment>
    );
};

export default PersonalInfo;