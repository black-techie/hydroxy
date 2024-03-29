// MeterDetailsPage.tsx
import React from 'react';
import '../css/MeterDetailsPage.css';
import Appbar from '../components/appbar';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


const MeterDetailsPage: React.FC = () => {


    return (
        <div className="meter-details-container">
<Appbar />

            <div className="meter-details">
                <h2>Meter Details</h2>
                <div className="details">
                    <p>Meter Name: Meter 1</p>
                    <p>Serial Number: SN123</p>
                    <p>Meter Type: Electric</p>
                    <p>Unit Price: $0.10</p>
                    <p>Production: 100 kWh</p>
                    <p>Total Revenue: $100</p>
                    <p>Last Data Sent: Jan 12, 2023</p>
                </div>
            </div>
            <div className="graph-section">
                <div className="graph">
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
    );
};

export default MeterDetailsPage;
