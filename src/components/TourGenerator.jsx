import React from 'react';
import { HomeCard } from './HomeCard';
import { Search } from 'lucide-react';

export const TourGenerator = ({ listings = [], selectedHomes = [], onSelectHome }) => {
  return (
    <div className="tour-generator">
      <div className="section-header">
        <h2>
          <Search size={20} className="icon-search" /> Available Homes
        </h2>
      </div>
      <div className="homes-grid">
        {listings.map(home => (
          <HomeCard
            key={home.id}
            home={home}
            isSelected={selectedHomes.includes(home.id)}
            onSelect={onSelectHome}
          />
        ))}
      </div>
    </div>
  );
};