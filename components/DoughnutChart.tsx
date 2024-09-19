'use client'

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
    datasets: [
        {
            label: 'Banks',
            data: [12500, 20000, 250000, 37500],
            backgroundColor: ['#0747b6', '#2265d8', '#2191fa']
        }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
return <Doughnut data={data} options={{
    cutout: '60%',
    plugins: {
        legend: {
            display: false
        }
    }
}}/>
}

export default DoughnutChart
