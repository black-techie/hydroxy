// LoginPage.tsx
import React, { useState } from 'react';
import '../css/LoginPage.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Example: You can send a request to your authentication server
    };

    const handleForgotPassword = () => {
        // Add your "Forgot Password" logic here
        console.log('Redirect to forgot password page');
    };

    const handleHelp = () => {
        // Add your "Help" logic here
        console.log('Redirect to help page');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button onClick={handleLogin}>Login</button>
                <div className="additional-options">
                    <span className="forgot-password-link" onClick={handleForgotPassword}>
                        Forgot Password
                    </span>
                    <span className="help-link" onClick={handleHelp}>
                        Help
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
