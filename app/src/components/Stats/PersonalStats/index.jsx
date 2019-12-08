import React, { Fragment } from 'react';

const PersonalStats = ({ user }) => {
    const bestRank = user.results.map(x => x.rank).sort()[0];
    const worstRank = user.results.map(x => x.rank).sort()[user.results.length - 1];
    const averageRank = user.results.map(x => x.rank).reduce((a, b) => (a + b)) / user.results.length;
    const bestTime = user.results.map(x => new Date(x.time)).sort()[0];
    const worstTime = user.results.map(x => new Date(x.time)).sort()[user.results.length - 1];
    const averageTime = user.results.map(x => new Date(x.time).getTime()).reduce((a, b) => (a + b)) / user.results.length;
    console.log(averageTime);
    return (
        <Fragment>
            <h3>
                Personal Stats
                </h3>
            <table className="table table-bordered table-striped" style={{ marginBottom: 50 }}>
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center"></th>
                        <th className="text-center">Worst</th>
                        <th className="text-center">Average</th>
                        <th className="text-center">Best</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle">Time</td>
                        <td className="text-center align-middle">{new Date(worstTime).getHours()}:{new Date(worstTime).getMinutes()}:{new Date(worstTime).getSeconds()}</td>
                        <td className="text-center align-middle">{new Date(averageTime).getHours()}:{new Date(averageTime).getMinutes()}:{new Date(averageTime).getSeconds()}</td>
                        <td className="text-center align-middle">{new Date(bestTime).getHours()}:{new Date(bestTime).getMinutes()}:{new Date(bestTime).getSeconds()}</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">Rank</td>
                        <td className="text-center align-middle">{worstRank}</td>
                        <td className="text-center align-middle">{averageRank}</td>
                        <td className="text-center align-middle">{bestRank}</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">Speed</td>
                        <td className="text-center align-middle">111</td>
                        <td className="text-center align-middle">2222</td>
                        <td className="text-center align-middle">333</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default PersonalStats;