import React from 'react';
import '../css/ReportsPage.css';

const ReportsPage: React.FC = () => {
    const cumulativeFlow = 1500;
    const revenueGeneration = '5,000 TZS';
    const numberOfUsers = 50;
    const numberOfActiveUsers = 30;

    return (
        <div className="reports-container">
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
