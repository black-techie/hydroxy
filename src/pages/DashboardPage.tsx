// DashboardPage.tsx
import React from 'react';
import '../css/DashboardPage.css';

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

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard-container">
            <div className="app-bar">
                <div className="shortcut" onClick={() => console.log('Send Configuration')}>
                    {/* <span className="material-icons">send</span> */}
                    <p>Configs</p>
                </div>
                <div className="shortcut" onClick={() => console.log('Go to Meters')}>
                    {/* <span className="material-icons">dashboard</span> */}
                    <p>Meters</p>
                </div>
                <div className="shortcut" onClick={() => console.log('Home')}>
                    {/* <span className="material-icons">home</span> */}
                    <p>Home</p>
                </div>
                <div className="shortcut" onClick={() => console.log('Go to Reports')}>
                    {/* <span className="material-icons">description</span> */}
                    <p>Reports</p>
                </div>
                <div className="shortcut" onClick={() => console.log('Settings')}>
                    {/* <span className="material-icons">settings</span> */}
                    <p>Settings</p>
                </div>
            </div>

            <div className="widget-section">
                <div className="widget">
                    <p className="widget-title">No of Meters</p>
                    <p className="widget-value">100</p>
                </div>
                <div className="widget">
                    <p className="widget-title">No of Users</p>
                    <p className="widget-value">50</p>
                </div>
                <div className="widget">
                    <p className="widget-title">Today's Revenue</p>
                    <p className="widget-value">$500</p>
                </div>
                <div className="widget">
                    <p className="widget-title">Total Revenue</p>
                    <p className="widget-value">$10,000</p>
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

export default DashboardPage;
