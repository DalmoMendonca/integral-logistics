import React, { useState } from 'react';
import QuadrantGrid from './components/QuadrantGrid';
import ResultsModal from './components/ResultsModal';
import AnalysisProgress from './components/AnalysisProgress';
import { analyzeData } from './services/analysisService';

function App() {
  const [selectedDatasets, setSelectedDatasets] = useState({
    ul: null,
    ur: null,
    ll: null,
    lr: null
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [progressStates, setProgressStates] = useState({
    ul: { status: 'pending', message: 'Waiting to start...' },
    ur: { status: 'pending', message: 'Waiting to start...' },
    ll: { status: 'pending', message: 'Waiting to start...' },
    lr: { status: 'pending', message: 'Waiting to start...' },
    orchestrator: { status: 'pending', message: 'Waiting to start...' }
  });

  const handleDatasetSelect = (quadrant, datasetType) => {
    setSelectedDatasets(prev => ({
      ...prev,
      [quadrant]: datasetType
    }));
  };

  const updateProgress = (agent, status, message) => {
    setProgressStates(prev => ({
      ...prev,
      [agent]: { status, message }
    }));
  };

  const handleRunAnalysis = async () => {
    // Check if all quadrants have datasets selected
    const allSelected = Object.values(selectedDatasets).every(dataset => dataset !== null);

    if (!allSelected) {
      alert('Please select a dataset for each quadrant before running analysis.');
      return;
    }

    // Reset progress states
    setProgressStates({
      ul: { status: 'pending', message: 'Waiting to start...' },
      ur: { status: 'pending', message: 'Waiting to start...' },
      ll: { status: 'pending', message: 'Waiting to start...' },
      lr: { status: 'pending', message: 'Waiting to start...' },
      orchestrator: { status: 'pending', message: 'Waiting to start...' }
    });

    setIsAnalyzing(true);
    try {
      const results = await analyzeData(selectedDatasets, updateProgress);
      setAnalysisResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Analysis failed:', error);
      console.error('Error type:', typeof error);
      console.error('Error message:', error?.message);
      console.error('Error stack:', error?.stack);
      console.error('Full error object:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Integral Logistics Dashboard</h1>
        <p>Holistic analysis using the Integral Theory framework</p>
      </header>

      <main>
        <QuadrantGrid
          selectedDatasets={selectedDatasets}
          onDatasetSelect={handleDatasetSelect}
        />

        <div className="analysis-controls">
          <button
            onClick={handleRunAnalysis}
            disabled={isAnalyzing || !Object.values(selectedDatasets).every(d => d !== null)}
            className="run-analysis-btn"
          >
            {isAnalyzing ? 'Running Integral Analysis...' : 'Run Integral Analysis'}
          </button>
        </div>

        {/* Progress Display */}
        <AnalysisProgress
          progressStates={progressStates}
          isAnalyzing={isAnalyzing}
        />
      </main>

      {showResults && analysisResults && (
        <ResultsModal
          results={analysisResults}
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  );
}

export default App;
