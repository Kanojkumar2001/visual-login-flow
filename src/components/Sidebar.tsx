
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  Car, 
  ShoppingCart, 
  Wrench, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: CircleDollarSign, label: 'Assets', path: '/assets' },
    { icon: Car, label: 'Booking', path: '/booking' },
    { icon: ShoppingCart, label: 'Sell Cars', path: '/sell-cars' },
    { icon: ShoppingCart, label: 'Buy Cars', path: '/buy-cars' },
    { icon: Wrench, label: 'Services', path: '/services' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
  ];
  
  const bottomMenuItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: LogOut, label: 'Log out', path: '#', onClick: logout },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="bg-dark w-64 min-h-screen flex flex-col py-6">
      <div className="flex-1">
        {menuItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.path}
            className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
          >
            <item.icon size={20} className={isActive(item.path) ? 'text-purple-400' : 'text-gray-400'} />
            <span className={isActive(item.path) ? 'font-medium' : 'text-gray-400'}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="mt-auto">
        {bottomMenuItems.map((item) => (
          <div key={item.label}>
            {item.onClick ? (
              <button 
                onClick={item.onClick}
                className="sidebar-item w-full text-left text-gray-400"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ) : (
              <Link 
                to={item.path}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <item.icon size={20} className={isActive(item.path) ? 'text-purple-400' : 'text-gray-400'} />
                <span className={isActive(item.path) ? 'font-medium' : 'text-gray-400'}>
                  {item.label}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
