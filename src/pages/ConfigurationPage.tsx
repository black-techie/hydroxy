// ConfigurationPage.tsx
import React, { useState } from 'react';
import Appbar from '../components/appbar';
import '../css/ConfigurationPage.css';

const ConfigurationPage: React.FC = () => {
    const [selectedMeter, setSelectedMeter] = useState('');
    const [configType, setConfigType] = useState('');
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');
    const [value, setValue] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const handleMeterChange = (meter: string) => {
        setSelectedMeter(meter);
        setConfigType('');
        setUserId('');
        setAmount('');
        setValue('');
        setShowSubmitButton(false);
    };

    const handleConfigTypeChange = (type: string) => {
        setConfigType(type);
        setShowSubmitButton(false);
        console.log(showSubmitButton)
    };

    const handleUserIdChange = (id: string) => {
        setUserId(id);
        setShowSubmitButton(false);
    };

    const handleAmountChange = (value: string) => {
        setAmount(value);
        setShowSubmitButton(false);
    };

    const handleValueChange = (value: string) => {
        setValue(value);
        setShowSubmitButton(false);
    };

    const handleSubmit = () => {
        // Perform submit logic here
        console.log('Meter:', selectedMeter);
        console.log('Config Type:', configType);
        console.log('User ID:', userId);
        console.log('Amount:', amount);
        console.log('Value:', value);
        // Additional logic as needed
        setShowSubmitButton(true); // Set to true after submission
    };

    return (
        <div className="configuration-container">
<Appbar />

            <div className="config-form">
                <label>Select Meter:</label>
                <select value={selectedMeter} onChange={(e) => handleMeterChange(e.target.value)}>
                    <option value="">Select Meter</option>
                    <option value="publicMeter">Public Meter</option>
                    <option value="privateMeter">Private Meter</option>
                </select>

                {selectedMeter === 'publicMeter' && (
                    <>
                        <label>Configuration Type:</label>
                        <select value={configType} onChange={(e) => handleConfigTypeChange(e.target.value)}>
                            <option value="">Select Configuration Type</option>
                            <option value="topup">Top-Up</option>
                            <option value="calibration">Calibration</option>
                            <option value="addUser">Add User</option>
                            <option value="deleteUser">Delete User</option>
                        </select>

                        {configType && (
                            <>
                                {configType === 'topup' && (
                                    <>
                                        <label>Enter Public User ID:</label>
                                        <input type="text" value={userId} onChange={(e) => handleUserIdChange(e.target.value)} />
                                    </>
                                )}

                                <label>Amount:</label>
                                <input type="text" value={amount} onChange={(e) => handleAmountChange(e.target.value)} />
                            </>
                        )}
                    </>
                )}

                {selectedMeter === 'privateMeter' && (
                    <>
                        <label>Configuration Type:</label>
                        <select value={configType} onChange={(e) => handleConfigTypeChange(e.target.value)}>
                            <option value="">Select Configuration Type</option>
                            <option value="topup">Top-Up</option>
                            <option value="calibration">Calibration</option>
                            <option value="addUser">Add User</option>
                            <option value="deleteUser">Delete User</option>
                        </select>

                        {configType && (
                            <>
                                {configType === 'topup' && (
                                    <>
                                        <label>Amount:</label>
                                        <input type="text" value={amount} onChange={(e) => handleAmountChange(e.target.value)} />
                                    </>
                                )}

                                {configType !== 'topup' && (
                                    <>
                                        <label>Value:</label>
                                        <input type="text" value={value} onChange={(e) => handleValueChange(e.target.value)} />
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}

                {configType && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    );
};

export default ConfigurationPage;
