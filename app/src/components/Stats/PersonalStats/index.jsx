import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

class PersonalStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
        const { user } = this.props;
        const data = {
            labels: user.results.map(x => `${new Date(x.event.date).getDate()}-${new Date(x.event.date).getMonth() + 1}-${new Date(x.event.date).getFullYear()}`),
            datasets: [
                {
                    label: 'My participation',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgb(220,53,69)',
                    borderColor: 'rgb(220,53,69)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgb(220,53,69)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgb(220,53,69)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: user.results.map(x => +`${new Date(x.time).getMinutes()}.${new Date(x.time).getSeconds()}`)
                }
            ]
        };

        this.setState({ data: data });
    };

    render() {
        const { user } = this.props;
        const { data } = this.state;
        const bestRank = user.results.length === 0 ? 0 : user.results.map(x => x.rank).sort()[0];
        const worstRank = user.results.length === 0 ? 0 : user.results.map(x => x.rank).sort()[user.results.length - 1];
        const averageRank = user.results.length === 0 ? 0 : Math.round(user.results.map(x => x.rank).reduce((a, b) => (a + b)) / user.results.length);
        const bestTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0)
            : user.results.map(x => new Date(2000, 1, 1, 0, new Date(x.time).getMinutes(), new Date(x.time).getSeconds())).sort((a, b) => { return new Date(a) - new Date(b) })[0];
        const worstTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0)
            : user.results.map(x => new Date(2000, 1, 1, 0, new Date(x.time).getMinutes(), new Date(x.time).getSeconds())).sort((a, b) => { return new Date(b) - new Date(a) })[0];
        const averageTime = user.results.length === 0 ? new Date(2000, 1, 1, 0, 0, 0) : user.results.map(x => new Date(x.time).getTime()).reduce((a, b) => (a + b)) / user.results.length;
        const bestSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(bestTime).getMinutes() * 60 + new Date(bestTime).getSeconds()) * 3.6).toFixed(3);
        const averageSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(averageTime).getMinutes() * 60 + new Date(averageTime).getSeconds()) * 3.6).toFixed(3);
        const worstSpeed = user.results.length === 0 ? 0 : (5000 / (new Date(worstTime).getMinutes() * 60 + new Date(worstTime).getSeconds()) * 3.6).toFixed(3);
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
                            <td className="text-center align-middle">{new Date(bestTime).getMinutes()}:{new Date(bestTime).getSeconds()}</td>
                            <td className="text-center align-middle">{new Date(averageTime).getMinutes()}:{new Date(averageTime).getSeconds()}</td>
                            <td className="text-center align-middle">{new Date(worstTime).getMinutes()}:{new Date(worstTime).getSeconds()}</td>
                        </tr>
                        <tr>
                            <td className="text-center align-middle">Rank</td>
                            <td className="text-center align-middle">{bestRank}</td>
                            <td className="text-center align-middle">{averageRank}</td>
                            <td className="text-center align-middle">{worstRank}</td>
                        </tr>
                        <tr>
                            <td className="text-center align-middle">Speed (km/h)</td>
                            <td className="text-center align-middle">{bestSpeed}</td>
                            <td className="text-center align-middle">{averageSpeed}</td>
                            <td className="text-center align-middle">{worstSpeed}</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <Line ref="chart" data={data} />
                </div>
            </Fragment>
        );
    };
};

export default PersonalStats;