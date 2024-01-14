import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ConfigurationPage from './pages/ConfigurationPage';
import MeterDetailsPage from './pages/MeterDetailsPage';
import AppSettingsPage from './pages/AppSettingsPage';
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/ReportsPage';
import MetersPage from './pages/MetersPage';
import LoginPage from './pages/login';
import './css/App.css';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/configs" element={<ConfigurationPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/setting" element={<AppSettingsPage />} />
          <Route path="/meter" element={<MeterDetailsPage />} />
          <Route path="/meters" element={<MetersPage />} />
          <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
