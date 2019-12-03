import React from 'react';

const Participants = ({ participants }) => {
    return (
        <table className="table table-bordered" style={{ marginBottom: 50 }}>
            <thead className="thead-light">
                <tr>
                    <th className="text-center">Username</th>
                    <th className="text-center">Full Name</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Age</th>
                </tr>
            </thead>
            <tbody>
                {participants.map(p => <tr>
                    <td className="text-center align-middle" key={p.username}>{p.username}</td>
                    <td className="text-center align-middle" key={p.firstName.toString() + p.lastName.toString()}>{p.firstName} {p.lastName}</td>
                    <td className="text-center align-middle" key={p.username + p.gender}>{p.gender}</td>
                    <td className="text-center align-middle" key={p.age.toString()}>{p.age}</td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default Participants;