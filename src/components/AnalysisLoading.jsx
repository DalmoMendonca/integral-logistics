import React from 'react';

const AnalysisLoading = ({ loadingStates, isAnalyzing }) => {
  if (!isAnalyzing) return null;

  const agents = [
    {
      id: 'ul',
      name: 'UL Agent',
      description: 'Individual Internal',
      icon: '🧠',
      color: '#d81b60'
    },
    {
      id: 'ur',
      name: 'UR Agent',
      description: 'Individual External',
      icon: '⚡',
      color: '#26a69a'
    },
    {
      id: 'll',
      name: 'LL Agent',
      description: 'Collective Internal',
      icon: '👥',
      color: '#00bfa5'
    },
    {
      id: 'lr',
      name: 'LR Agent',
      description: 'Collective External',
      icon: '📊',
      color: '#4db6ac'
    },
    {
      id: 'orchestrator',
      name: 'Orchestrator',
      description: 'Integral Synthesis',
      icon: '🔮',
      color: '#ff9800'
    }
  ];

  const getStatusIcon = (status, progress) => {
    if (status === 'completed') return '✅';
    if (status === 'processing') return '🔄';
    return '⏳';
  };

  const getStatusText = (status, progress) => {
    if (status === 'completed') return 'Complete';
    if (status === 'processing') return `${progress}%`;
    return 'Pending';
  };

  return (
    <div className="analysis-loading-overlay">
      <div className="analysis-loading-container">
        <div className="loading-header">
          <h2>🤖 Integral Analysis in Progress</h2>
          <p>Our AI agents are analyzing your logistics data across all four quadrants</p>
        </div>

        <div className="agents-progress">
          {agents.map((agent) => {
            const state = loadingStates[agent.id];
            const isActive = state.status === 'processing';
            const isComplete = state.status === 'completed';

            return (
              <div
                key={agent.id}
                className={`agent-item ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
              >
                <div className="agent-icon" style={{ backgroundColor: agent.color }}>
                  {isActive ? '🔄' : isComplete ? '✅' : agent.icon}
                </div>

                <div className="agent-info">
                  <div className="agent-name">{agent.name}</div>
                  <div className="agent-description">{agent.description}</div>
                </div>

                <div className="agent-status">
                  <div className="status-text">
                    {getStatusText(state.status, state.progress)}
                  </div>

                  {isActive && (
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${state.progress}%`,
                          backgroundColor: agent.color
                        }}
                      />
                    </div>
                  )}

                  {isComplete && (
                    <div className="completion-checkmark">✓</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="loading-footer">
          <div className="loading-spinner"></div>
          <p>Processing... Please wait while we synthesize your integral analysis</p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoading;
