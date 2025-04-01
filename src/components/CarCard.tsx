
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarCardProps {
  car: {
    id: string;
    model: string;
    type: string;
    image: string;
    rating: number;
    transmission: string;
    price: number;
  };
}

const CarCard = ({ car }: CarCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="car-card">
      <div className="p-4 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-white font-medium">{car.model}</h3>
            <p className="text-gray-400 text-sm">{car.type}</p>
          </div>
          <button 
            onClick={toggleFavorite}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Heart 
              size={20} 
              className={cn(
                "transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : "fill-transparent"
              )} 
            />
          </button>
        </div>
        
        <div className="my-4 flex justify-center">
          <img 
            src={car.image} 
            alt={car.model} 
            className="h-32 object-contain" 
          />
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <span className="text-purple-400">{car.rating}</span>
            <span className="text-gray-400 text-sm">/ 5</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-400">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-400"
            >
              <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm">{car.transmission}</span>
          </div>
          
          <div className="text-white">
            <span className="font-bold">${car.price}</span>
            <span className="text-gray-400 text-sm">/d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
