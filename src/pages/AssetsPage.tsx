import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import CarCard from "@/components/CarCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Car, CarFront } from "lucide-react";

const carsData = [
  {
    id: "car1",
    model: "Tesla Model S",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    rating: 4.9,
    transmission: "Auto",
    price: 120
  },
  {
    id: "car2",
    model: "BMW i8",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    rating: 4.7,
    transmission: "Auto",
    price: 150
  },
  {
    id: "car3",
    model: "Audi e-tron GT",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
    rating: 4.8,
    transmission: "Auto",
    price: 140
  },
  {
    id: "car4",
    model: "Mercedes EQS",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    rating: 4.6,
    transmission: "Auto",
    price: 130
  },
  {
    id: "car5",
    model: "Porsche Taycan",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    rating: 4.9,
    transmission: "Auto",
    price: 170
  },
  {
    id: "car6",
    model: "Jaguar I-PACE",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    rating: 4.5,
    transmission: "Auto",
    price: 125
  }
];

const AssetsPage = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showElectricOnly, setShowElectricOnly] = useState(false);
  
  const filteredCars = carsData.filter(car => {
    const matchesSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesElectric = showElectricOnly ? car.type === "Electric" : true;
    
    return matchesSearch && matchesPrice && matchesElectric;
  });

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Available Cars</h1>
        <div className="flex items-center gap-2 bg-dark-card p-2 rounded-lg">
          <Car className="text-purple-500" size={24} />
          <span className="text-white font-medium">{filteredCars.length} vehicles available</span>
        </div>
      </div>

      <Card className="bg-dark-card text-white border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CarFront className="text-purple-500" size={20} />
            Featured Models
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {carsData.slice(0, 3).map((car) => (
                <CarouselItem key={car.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-dark border border-gray-700">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={car.image}
                            alt={car.model}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                        </AspectRatio>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">{car.model}</h3>
                          <p className="text-purple-400">${car.price}/day</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-black/50 text-white border-gray-600 hover:bg-black/70" />
            <CarouselNext className="right-2 bg-black/50 text-white border-gray-600 hover:bg-black/70" />
          </Carousel>
        </CardContent>
      </Card>
      
      <Card className="bg-dark-card text-white border-gray-700 mb-8">
        <CardHeader>
          <CardTitle>Find Your Perfect Car</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="search" className="text-white mb-2 block">Search Models</Label>
              <Input 
                id="search"
                placeholder="Search car models..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-dark border-gray-700 text-white"
              />
            </div>
            
            <div>
              <Label className="text-white mb-2 block">Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
              <Slider 
                defaultValue={[0, 200]} 
                max={200} 
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-4"
              />
            </div>
            
            <div className="flex items-center space-x-2 mt-8">
              <Switch 
                id="electric-only" 
                checked={showElectricOnly}
                onCheckedChange={setShowElectricOnly}
              />
              <Label htmlFor="electric-only" className="text-white">
                Electric Vehicles Only
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-12">
            <Car size={48} className="mx-auto mb-4 text-gray-600" />
            <p className="text-xl">No cars match your current filters</p>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetsPage;
