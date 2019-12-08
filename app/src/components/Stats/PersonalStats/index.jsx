import React, { Fragment } from 'react';

const PersonalStats = ({ user }) => {
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
                        <td className="text-center align-middle">111</td>
                        <td className="text-center align-middle">2222</td>
                        <td className="text-center align-middle">333</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle">Rank</td>
                        <td className="text-center align-middle">111</td>
                        <td className="text-center align-middle">2222</td>
                        <td className="text-center align-middle">333</td>
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