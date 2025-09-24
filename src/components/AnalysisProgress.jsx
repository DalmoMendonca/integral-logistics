import React from 'react';

const AnalysisProgress = ({ progressStates, isAnalyzing }) => {
  if (!isAnalyzing) return null;

  const agents = [
    { id: 'ul', name: 'UL Agent', description: 'Individual Internal Analysis', icon: '🧠' },
    { id: 'ur', name: 'UR Agent', description: 'Individual External Analysis', icon: '⚡' },
    { id: 'll', name: 'LL Agent', description: 'Collective Internal Analysis', icon: '👥' },
    { id: 'lr', name: 'LR Agent', description: 'Collective External Analysis', icon: '📊' },
    { id: 'orchestrator', name: 'Orchestrator', description: 'Integral Synthesis', icon: '🔮' }
  ];

  return (
    <div className="analysis-progress-overlay">
      <div className="analysis-progress-container">
        <div className="progress-header">
          <h3>🔄 Integral Analysis in Progress</h3>
          <p>Our AI agents are analyzing your logistics data across all four quadrants</p>
        </div>

        <div className="progress-agents">
          {agents.map((agent) => {
            const state = progressStates[agent.id];
            const isProcessing = state.status === 'processing';
            const isCompleted = state.status === 'completed';
            const isPending = state.status === 'pending';

            return (
              <div
                key={agent.id}
                className={`progress-agent ${isCompleted ? 'completed' : isProcessing ? 'processing' : 'pending'}`}
              >
                <div className="agent-header">
                  <div className="agent-icon">
                    {isCompleted ? '✅' : isProcessing ? '🔄' : '⏳'}
                    <span className="agent-emoji">{agent.icon}</span>
                  </div>
                  <div className="agent-info">
                    <h4>{agent.name}</h4>
                    <p>{agent.description}</p>
                  </div>
                </div>

                <div className="agent-status">
                  <div className="status-message">
                    {state.message}
                  </div>
                  <div className="status-indicator">
                    <div className={`status-dot ${state.status}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="progress-footer">
          <div className="progress-spinner"></div>
          <p className="progress-note">
            This process typically takes 5 to 20 minutes. Please don't close this window.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
