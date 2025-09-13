import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/sections/Overview';
import MarketAnalysis from './components/sections/MarketAnalysis';
import Opportunities from './components/sections/Opportunities';
import StrategicRoadmap from './components/sections/StrategicRoadmap';
import TechnicalSpecs from './components/sections/TechnicalSpecs';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'market':
        return <MarketAnalysis />;
      case 'opportunities':
        return <Opportunities />;
      case 'roadmap':
        return <StrategicRoadmap />;
      case 'technical':
        return <TechnicalSpecs />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="md:ml-64 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
