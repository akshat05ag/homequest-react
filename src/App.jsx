import { useState, useCallback, useMemo } from 'react';
import { listings } from './data/listings';
import { Navbar } from './components/Navbar';
import { TourGenerator } from './components/TourGenerator';
import { TourPlan } from './components/TourPlan';
import './index.css';

// Constants
const MAX_SELECTIONS = 5;

export default function App() {
  const [selectedHomes, setSelectedHomes] = useState([]);
  const [showTour, setShowTour] = useState(false);

  // Memoized listings data
  const propertyListings = useMemo(() => listings, []);

  // Optimized handler with useCallback
  const handleSelectHome = useCallback((homeId) => {
    setSelectedHomes(prevSelected => {
      if (prevSelected.includes(homeId)) {
        return prevSelected.filter(id => id !== homeId);
      } else if (prevSelected.length < MAX_SELECTIONS) {
        return [...prevSelected, homeId];
      }
      return prevSelected;
    });
  }, []);

  const handleShowTour = useCallback(() => {
    if (selectedHomes.length === MAX_SELECTIONS) {
      setShowTour(true);
    }
  }, [selectedHomes.length]);

  const handleResetTour = useCallback(() => {
    setSelectedHomes([]);
    setShowTour(false);
  }, []);

  // Calculate if tour can be generated
  const canGenerateTour = selectedHomes.length === MAX_SELECTIONS;

  return (
    <div className="app">
      <Navbar 
        selectedCount={selectedHomes.length} 
        maxSelections={MAX_SELECTIONS}
        onShowTour={handleShowTour} 
        canGenerateTour={canGenerateTour}
      />
      
      <main className="main-content">
        {!showTour ? (
          <TourGenerator 
            listings={propertyListings} 
            selectedHomes={selectedHomes} 
            onSelectHome={handleSelectHome} 
            maxSelections={MAX_SELECTIONS}
          />
        ) : (
          <TourPlan 
            selectedHomes={selectedHomes} 
            listings={propertyListings} 
            onReset={handleResetTour} 
          />
        )}
      </main>

      {/* Notification for selection limit */}
      {selectedHomes.length === MAX_SELECTIONS && !showTour && (
        <div className="selection-notification">
          You've reached the maximum selection ({MAX_SELECTIONS}). Ready to generate your tour!
        </div>
      )}
    </div>
  );
}