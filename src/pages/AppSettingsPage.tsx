// AppSettingsPage.tsx
import React, { useState } from 'react';
import '../css/AppSettingsPage.css';

const AppSettingsPage: React.FC = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [notificationEnabled, setNotificationEnabled] = useState(true);

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleNotificationToggle = () => {
        setNotificationEnabled(!notificationEnabled);
    };

    const handleSubmit = () => {
        // Perform submit logic here (e.g., update user profile details)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Notification Enabled:', notificationEnabled);
        // Additional logic as needed
    };

    return (
        <div className="app-settings-container">
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

            <div className="profile-section">
                <h2>Edit Profile</h2>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => handleNameChange(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />

                <button onClick={handleSubmit}>Save Changes</button>
            </div>

            <div className="notifications-section">
                <h2>Notification Settings</h2>
                <label>Enable Notifications:</label>
                <input
                    type="checkbox"
                    checked={notificationEnabled}
                    onChange={handleNotificationToggle}
                />

                {/* Additional notification settings can be added here */}
            </div>

            <div className="help-support-section">
                <h2>Help & Support</h2>
                <p>Contact us at: support@example.com</p>
                {/* Additional help and support information can be added here */}
            </div>
        </div>
    );
};

export default AppSettingsPage;
