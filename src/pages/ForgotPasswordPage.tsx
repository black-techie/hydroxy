// ForgotPasswordPage.tsx
import React, { useState } from 'react';
import '../css/ForgotPasswordPage.css';

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Add your reset password logic here
        console.log('Email:', email);
        // Example: Send a reset password email to the provided email address
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
                <p>Enter your email address to reset your password.</p>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button onClick={handleResetPassword}>Reset Password</button>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
