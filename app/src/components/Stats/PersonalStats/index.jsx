import React, { Fragment } from 'react';

const PersonalStats = ({ user }) => {
    const bestRank = user.results.length === 0 ? 0 : user.results.map(x => x.rank).sort()[0];
    const worstRank = user.results.length === 0 ? 0 : user.results.map(x => x.rank).sort()[user.results.length - 1];
    const averageRank = user.results.length === 0 ? 0 : Math.round(user.results.map(x => x.rank).reduce((a, b) => (a + b)) / user.results.length);
    const bestTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0) : user.results.map(x => new Date(x.time)).sort()[0];
    const worstTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0) : user.results.map(x => new Date(x.time)).sort()[user.results.length - 1];
    const averageTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0) : user.results.map(x => new Date(x.time).getTime()).reduce((a, b) => (a + b)) / user.results.length;
    const bestSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(bestTime).getHours() * 3600 + new Date(bestTime).getMinutes() * 60 + new Date(bestTime).getSeconds()) * 3.6).toFixed(3);
    const averageSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(averageTime).getHours() * 3600 + new Date(averageTime).getMinutes() * 60 + new Date(averageTime).getSeconds()) * 3.6).toFixed(3);
    const worstSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(worstTime).getHours() * 3600 + new Date(worstTime).getMinutes() * 60 + new Date(worstTime).getSeconds()) * 3.6).toFixed(3);
    console.log(bestSpeed);
    return (
        <Fragment>
            <h3>
                Personal Stats
                </h3>
            <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center"></th>
                        <th className="text-center">Best</th>
                        <th className="text-center">Average</th>
                        <th className="text-center">Worst</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle">Time</td>
                        <td className="text-center align-middle">{new Date(bestTime).getHours()}:{new Date(bestTime).getMinutes()}:{new Date(bestTime).getSeconds()}</td>
                        <td className="text-center align-middle">{new Date(averageTime).getHours()}:{new Date(averageTime).getMinutes()}:{new Date(averageTime).getSeconds()}</td>
                        <td className="text-center align-middle">{new Date(worstTime).getHours()}:{new Date(worstTime).getMinutes()}:{new Date(worstTime).getSeconds()}</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">Rank</td>
                        <td className="text-center align-middle">{bestRank}</td>
                        <td className="text-center align-middle">{averageRank}</td>
                        <td className="text-center align-middle">{worstRank}</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">Speed</td>
                        <td className="text-center align-middle">{bestSpeed} km/hour</td>
                        <td className="text-center align-middle">{averageSpeed} km/hour</td>
                        <td className="text-center align-middle">{worstSpeed} km/hour</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default PersonalStats;