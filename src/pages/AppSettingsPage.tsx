// AppSettingsPage.tsx
import React, { useState } from 'react';
import Appbar from '../components/appbar';
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
            <Appbar />

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
