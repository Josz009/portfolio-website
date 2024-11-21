
import React from 'react';
import './App.css';

function CybersecurityDashboard() {
    const alerts = [
        { id: 1, message: 'High CPU Usage Detected', severity: 'Critical', time: '2 mins ago' },
        { id: 2, message: 'Unauthorized Login Attempt', severity: 'High', time: '5 mins ago' },
        { id: 3, message: 'Malware Detected', severity: 'Medium', time: '10 mins ago' },
        { id: 4, message: 'Firewall Rules Updated', severity: 'Low', time: '15 mins ago' },
    ];

    return (
        <div className="cyber-dashboard">
            <h1>Cybersecurity Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Alert</th>
                        <th>Severity</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((alert) => (
                        <tr key={alert.id} className={alert.severity.toLowerCase()}>
                            <td>{alert.id}</td>
                            <td>{alert.message}</td>
                            <td>{alert.severity}</td>
                            <td>{alert.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CybersecurityDashboard;
