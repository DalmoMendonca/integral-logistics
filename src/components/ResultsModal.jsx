import React, { useState } from 'react';
import IntegratedDashboard from './IntegratedDashboard';
//import ActionPlan from './ActionPlan';

const ResultsModal = ({ results, onClose }) => {
  const [showAgentDetails, setShowAgentDetails] = useState(false);

  if (!results) return null;

  const { agentSummaries, integratedAnalysis, dashboardData } = results;

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Integral Analysis Results</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">

          {/* Integrated Dashboard */}
          <IntegratedDashboard analysis={integratedAnalysis} dashboardData={dashboardData} />

          {/* Toggle for Agent Details */}
          <div className="agent-details-toggle">
            <button
              className="toggle-btn"
              onClick={() => setShowAgentDetails(!showAgentDetails)}
            >
              {showAgentDetails ? '▼' : '▶'} Individual Agent Analyses (Click to {showAgentDetails ? 'collapse' : 'expand'})
            </button>
          </div>

          {/* Collapsible Individual Agent Summaries */}
          {showAgentDetails && (
            <div className="agent-summaries">
              <div className="agent-summary">
                <h3 className="agent-title">UL Agent - Individual Internal</h3>
                <div className="agent-content">{agentSummaries.ul}</div>
              </div>

              <div className="agent-summary">
                <h3 className="agent-title">UR Agent - Individual External</h3>
                <div className="agent-content">{agentSummaries.ur}</div>
              </div>

              <div className="agent-summary">
                <h3 className="agent-title">LL Agent - Collective Internal</h3>
                <div className="agent-content">{agentSummaries.ll}</div>
              </div>

              <div className="agent-summary">
                <h3 className="agent-title">LR Agent - Collective External</h3>
                <div className="agent-content">{agentSummaries.lr}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
