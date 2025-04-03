import { 
  MapPin, 
  Clock, 
  IndianRupee, 
  RotateCcw, 
  Home,
  BedDouble,
  Bath,
  Square 
} from 'lucide-react';

export const TourPlan = ({ selectedHomes, listings, onReset }) => {
  const tourHomes = selectedHomes.map(id => 
    listings.find(home => home.id === id)
  );

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  return (
    <div className="tour-plan">
      <h2><MapPin size={22} /> Your 1-Day Tour Plan</h2>
      <p>Here's your optimized home tour for the day:</p>
      
      <div className="tour-schedule">
        {tourHomes.map((home, index) => (
          <div key={home.id} className="tour-stop">
            <h3>
              <Home size={18} className="icon-home" /> Stop {index + 1}: {home.address}
            </h3>
            <p><Clock size={16} /> Time: {9 + index}:00 - {10 + index}:00</p>
            <div className="stop-details">
              <p><IndianRupee size={16} /> Price: {formatPrice(home.price)}</p>
              <p>
                <BedDouble size={16} /> {home.bedrooms} BHK | 
                <Bath size={16} /> {home.bathrooms} | 
                <Square size={16} /> {home.squareFootage} sq.ft.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="tour-summary">
        <p><Clock size={18} /> Total Tour Time: 5 hours (1 hour per home)</p>
        <button onClick={onReset} className="reset-btn">
          <RotateCcw size={18} /> Start New Tour
        </button>
      </div>
    </div>
  );
};