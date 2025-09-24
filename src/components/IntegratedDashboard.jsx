import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const IntegratedDashboard = ({ analysis, dashboardData }) => {
  if (!analysis) return null;

  // Use provided dashboard data or fall back to mock data
  const sleepData = dashboardData?.sleepData || [
    { name: 'Poor Sleep', value: 35, color: '#d81b60' },
    { name: 'Good Sleep', value: 45, color: '#26a69a' },
    { name: 'Excellent Sleep', value: 20, color: '#00bfa5' }
  ];

  const performanceData = dashboardData?.performanceData || [
    { name: 'Week 1', efficiency: 75, safety: 85 },
    { name: 'Week 2', efficiency: 82, safety: 88 },
    { name: 'Week 3', efficiency: 78, safety: 92 },
    { name: 'Week 4', efficiency: 88, safety: 95 }
  ];

  const costData = dashboardData?.costData || [
    { name: 'Fuel', value: 45, color: '#d81b60' },
    { name: 'Maintenance', value: 25, color: '#26a69a' },
    { name: 'Labor', value: 20, color: '#00bfa5' },
    { name: 'Other', value: 10, color: '#4db6ac' }
  ];

  const cultureData = dashboardData?.cultureData || [
    { name: 'Vendor Relations', value: 75, color: '#26a69a' },
    { name: 'Team Morale', value: 82, color: '#00bfa5' },
    { name: 'Recognition', value: 68, color: '#4db6ac' },
    { name: 'Communication', value: 78, color: '#d81b60' }
  ];

  return (
    <div className="dashboard-section">
      <div className="dashboard-analysis">
        <h4 style={{ color: '#26a69a', marginBottom: '15px', textAlign: 'center', fontSize: '1.3rem' }}>Integral Analysis Summary</h4>
        <div className="analysis-content">
          {analysis}
        </div>
      </div>

      <h2 className="dashboard-title">Integrated Performance Dashboard</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        <div className="chart-container">
          <h4 style={{ color: '#26a69a', marginBottom: '15px', textAlign: 'center' }}>Sleep Quality Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={sleepData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {sleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h4 style={{ color: '#26a69a', marginBottom: '15px', textAlign: 'center' }}>Weekly Performance Trends</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#cccccc" />
              <YAxis stroke="#cccccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #26a69a',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="efficiency" stroke="#26a69a" strokeWidth={2} />
              <Line type="monotone" dataKey="safety" stroke="#d81b60" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        <div className="chart-container">
          <h4 style={{ color: '#26a69a', marginBottom: '15px', textAlign: 'center' }}>Cost Breakdown</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#cccccc" />
              <YAxis stroke="#cccccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #26a69a',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#26a69a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h4 style={{ color: '#26a69a', marginBottom: '15px', textAlign: 'center' }}>Culture & Engagement Metrics</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={cultureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#cccccc" />
              <YAxis stroke="#cccccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #26a69a',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#00bfa5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
    </div>
  );
};

export default IntegratedDashboard;
