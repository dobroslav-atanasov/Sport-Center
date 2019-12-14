import React, { Fragment, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ user }) => {
    const chart = useRef();
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

    return (
        <Fragment>
            <h3>
                My times
            </h3>

            <div>
                <Line ref={chart} data={data} />
            </div>
        </Fragment>
    );
};

export default Chart;