import React from 'react';

const QuadrantGrid = ({ selectedDatasets, onDatasetSelect }) => {
  const quadrants = [
    {
      id: 'ul',
      title: 'UL - Individual Internal',
      description: 'Daily driver logs focusing on subjective experience: sleep quality, mood states, and personal well-being indicators.',
      datasets: [
        { type: 'neg', name: 'Poor', description: 'Low sleep hours, negative mood patterns' },
        { type: 'pos', name: 'Good', description: 'Adequate sleep, positive mood trends' },
        { type: 'inc', name: 'Mixed Results', description: 'Variable sleep quality and mood patterns' }
      ]
    },
    {
      id: 'ur',
      title: 'UR - Individual External',
      description: 'Daily operational metrics: hours on road, break times, delivery throughput, and schedule adherence.',
      datasets: [
        { type: 'neg', name: 'Poor', description: 'Long hours, few breaks, missed schedules' },
        { type: 'pos', name: 'Good', description: 'Balanced hours, regular breaks, on-time' },
        { type: 'inc', name: 'Mixed Results', description: 'Variable operational efficiency patterns' }
      ]
    },
    {
      id: 'll',
      title: 'LL - Collective Internal',
      description: 'Weekly cultural feedback: vendor treatment, organizational culture, appreciation, and interpersonal dynamics.',
      datasets: [
        { type: 'neg', name: 'Poor', description: 'Negative vendor relations, toxic culture' },
        { type: 'pos', name: 'Good', description: 'Positive relationships, supportive culture' },
        { type: 'inc', name: 'Mixed Results', description: 'Variable cultural and relational dynamics' }
      ]
    },
    {
      id: 'lr',
      title: 'LR - Collective External',
      description: 'Weekly business metrics: revenue trends, safety incidents, regulatory compliance, and operational costs.',
      datasets: [
        { type: 'neg', name: 'Poor', description: 'High costs, safety incidents, low revenue' },
        { type: 'pos', name: 'Good', description: 'Low costs, safe operations, strong revenue' },
        { type: 'inc', name: 'Mixed Results', description: 'Variable business performance indicators' }
      ]
    }
  ];

  return (
    <div className="quadrant-grid">
      {quadrants.map(quadrant => (
        <div key={quadrant.id} className="quadrant">
          <div className="quadrant-header">
            <h2 className="quadrant-title">{quadrant.title}</h2>
            <div className="dataset-selector">
              {quadrant.datasets.map(dataset => (
                <button
                  key={dataset.type}
                  className={`dataset-toggle ${selectedDatasets[quadrant.id] === dataset.type ? 'active' : ''}`}
                  onClick={() => onDatasetSelect(quadrant.id, dataset.type)}
                >
                  {dataset.type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <p className="quadrant-description">{quadrant.description}</p>

          <div className="dataset-options">
            {quadrant.datasets.map(dataset => (
              <div
                key={dataset.type}
                className={`dataset-option ${selectedDatasets[quadrant.id] === dataset.type ? 'selected' : ''}`}
                onClick={() => onDatasetSelect(quadrant.id, dataset.type)}
              >
                <div className="dataset-name">{dataset.name}</div>
                <div className="dataset-description">{dataset.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuadrantGrid;
