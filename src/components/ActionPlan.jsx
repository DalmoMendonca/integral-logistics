import React from 'react';

const ActionPlan = ({ plan }) => {
  if (!plan) return null;

  // If plan is a string from the orchestrator, try to parse it
  let parsedPlan = plan;
  if (typeof plan === 'string') {
    // For now, use the plan as-is since the orchestrator will provide structured content
    parsedPlan = plan;
  }

  return (
    <div className="action-plan">
      <h3>90-Day Integral Action Plan</h3>

      <div className="action-content">
        {parsedPlan}
      </div>
    </div>
  );
};

export default ActionPlan;
