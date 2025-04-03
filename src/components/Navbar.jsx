import { Home, Rocket, ChevronRight, Building2 } from 'lucide-react';

export const Navbar = ({ selectedCount, onShowTour, maxSelections = 5, canGenerateTour }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-container">
          <h1 className="logo">
            <Home size={24} className="icon-home" /> JumboHomes
          </h1>
          <p className="subtitle">Find Your Perfect Home & Plan Your Visit</p>
        </div>
      </div>
      
      <div className="tour-controls">
        <div className="selection-counter">
          <span className="count">{selectedCount}</span>
          <ChevronRight size={16} className="icon-divider" />
          <span className="max-count">{maxSelections}</span>
          <span className="label">Selected</span>
        </div>
        
        {canGenerateTour && (
          <button onClick={onShowTour} className="generate-tour-btn">
            <Rocket size={18} className="btn-icon" />
            <span className="btn-text">Generate Tour</span>
          </button>
        )}
      </div>
    </nav>
  );
};