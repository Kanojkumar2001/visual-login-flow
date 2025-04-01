
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid3X3, LayoutGrid } from 'lucide-react';
import CarCard from '@/components/CarCard';

// Car data
const carsData = [
  {
    id: '1',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '2',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '3',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '4',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '5',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '6',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '7',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '8',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
  {
    id: '9',
    model: 'Porshe 718 Cayman S',
    type: 'Coupe',
    image: '/lovable-uploads/43f5c578-9609-43a8-8064-c3210d0e494a.png',
    rating: 4,
    transmission: 'Manual',
    price: 400,
  },
];

const BookingPage = () => {
  const [selectedCondition, setSelectedCondition] = useState('new');
  const [selectedBrand, setSelectedBrand] = useState('toyota');
  const [layout, setLayout] = useState<'grid' | 'grid3'>('grid');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Booking</h1>
      
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div className="flex gap-4">
          <div className="w-32">
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="bg-dark-card text-white border-gray-700">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent className="bg-dark-card text-white border-gray-700">
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="used">Used</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-32">
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="bg-dark-card text-white border-gray-700">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent className="bg-dark-card text-white border-gray-700">
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`border-gray-700 ${layout === 'grid' ? 'bg-dark-card text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setLayout('grid')}
          >
            <LayoutGrid size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`border-gray-700 ${layout === 'grid3' ? 'bg-dark-card text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setLayout('grid3')}
          >
            <Grid3X3 size={20} />
          </Button>
          
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19Z" fill="white"/>
              <path d="M13 7H11V13H17V11H13V7Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className={`grid gap-6 ${layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'}`}>
        {carsData.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
