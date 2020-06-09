import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length 
        ? (
        <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Casos Ativos',
                    borderColor: 'rgba(255,255,0,0.3)',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Mortes',
                    borderColor: 'pink',
                    backgroundColor: 'rgba( 255,0,255,0.3)',
                    fill: true,
                },
            ],
            }} 
        />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;