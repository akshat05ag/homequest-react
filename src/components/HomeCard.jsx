import { BedDouble, MapPin, Bath, Square, Check, CalendarCheck, CalendarPlus } from 'lucide-react';

export const HomeCard = ({ home, isSelected, onSelect }) => {
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  return (
    <div className={`home-card ${isSelected ? 'selected' : ''}`}>
      <div className="image-container">
        <img src={home.image} alt={home.address} className="home-image" />
        <div className="price-badge">{formatPrice(home.price)}</div>
      </div>
      <div className="home-details">
        <h3>{home.address}</h3>

        <div className="specs">
          <span><BedDouble size={16} /> {home.bedrooms} BHK</span>
          <span><Bath size={16} /> {home.bathrooms}</span>
          <span><Square size={16} /> {home.squareFootage} sq ft </span>
        </div>
        <p className="description">{home.description}</p>
        <div className="features">
          {home.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="feature-tag">
              <Check size={14} /> {feature}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onSelect(home.id)}
          className={`select-btn ${isSelected ? 'selected' : ''}`}
        >
          {isSelected ? (
            <>
              <CalendarCheck size={18} /> Selected for Tour
            </>
          ) : (
            <>
              <CalendarPlus size={18} /> Add to Tour
            </>
          )}
        </button>
      </div>
    </div>
  );
};