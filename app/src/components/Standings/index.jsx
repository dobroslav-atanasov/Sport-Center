import React, { Fragment, useState, useEffect } from 'react';
import Loading from '../Loading';
import userService from '../../services/userService';

const Standings = () => {
    const [users, setUsers] = useState(undefined);

    useEffect(() => {
        userService.getUsersByPoints()
            .then(users => {
                setUsers(users);
            });
    });

    return (
        <Fragment>
            {users ?
                <div className="container" style={{ marginTop: 30, marginBottom: 50 }}>
                    <div className="text-center" style={{ marginBottom: 20 }}>
                        <h3>Standings</h3>
                    </div>

                    <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-center">Rank</th>
                                <th className="text-center">Username</th>
                                <th className="text-center">Full Name</th>
                                <th className="text-center">Age</th>
                                <th className="text-center">Gender</th>
                                <th className="text-center">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, index) =>
                                <tr>
                                    <td className="text-center align-middle" key={u.rank + u.username}>{index + 1}</td>
                                    <td className="text-center align-middle" key={u.username}>{u.username}</td>
                                    <td className="text-center align-middle" key={u.username + u.firstName + u.lastName}>{u.firstName} {u.lastName}</td>
                                    <td className="text-center align-middle" key={u.username + u.age}>{u.age}</td>
                                    <td className="text-center align-middle" key={u.username + u.gender}>{u.gender}</td>
                                    <td className="text-center align-middle" key={u.username + index}>{u.points}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                : <Loading />}
        </Fragment>
    );
};

export default Standings;