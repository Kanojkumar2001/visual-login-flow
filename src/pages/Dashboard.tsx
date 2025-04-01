
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      
      <div className="bg-dark-card rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-white mb-4">Welcome to Your Car Booking Dashboard</h2>
        <p className="text-gray-400 mb-4">
          Manage your bookings, explore available vehicles, and access all services from here.
        </p>
        
        <Button 
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => navigate('/booking')}
        >
          Go to Bookings
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-card rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-2">Available Cars</h3>
          <p className="text-gray-400 mb-4">Browse our collection of premium vehicles</p>
          <Button variant="outline" className="w-full border-gray-700 text-gray-300">
            View Cars
          </Button>
        </div>
        
        <div className="bg-dark-card rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-2">My Bookings</h3>
          <p className="text-gray-400 mb-4">View and manage your current bookings</p>
          <Button variant="outline" className="w-full border-gray-700 text-gray-300">
            View Bookings
          </Button>
        </div>
        
        <div className="bg-dark-card rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-2">Services</h3>
          <p className="text-gray-400 mb-4">Schedule maintenance and other services</p>
          <Button variant="outline" className="w-full border-gray-700 text-gray-300">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
