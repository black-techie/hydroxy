import React from 'react';
import '../css/ReportsPage.css';
import Appbar from '../components/appbar';

const ReportsPage: React.FC = () => {
    const cumulativeFlow = 1500;
    const revenueGeneration = '5,000 TZS';
    const numberOfUsers = 50;
    const numberOfActiveUsers = 30;

    return (
        <div className="reports-container">
            <Appbar />
            <div className="reports-widgets">
                <div className="widget">
                    <h3>Errors</h3>
                    <p>{0}</p>
                </div>

                <div className="widget">
                    <h3>Cumulative Flow</h3>
                    <p>{cumulativeFlow}</p>
                </div>

                <div className="widget">
                    <h3>Revenue Generation</h3>
                    <p>{revenueGeneration}</p>
                </div>

                <div className="widget">
                    <h3>Number of Transactions</h3>
                    <p>{1000}</p>
                </div>

                <div className="widget">
                    <h3>No of Users</h3>
                    <p>{numberOfUsers}</p>
                </div>

                <div className="widget">
                    <h3>No of Active Users</h3>
                    <p>{numberOfActiveUsers}</p>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
