import { Home, Users, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'accueil', label: 'Accueil', icon: Home },
  { id: 'users', label: 'Utilisateurs', icon: Users },
  { id: 'settings', label: 'Paramètres', icon: Settings }
];

export const Sidebar = ({ isOpen, currentPage, onPageChange }: SidebarProps) => {
  return (
    <div 
      className={`bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="h-full overflow-y-auto">
        {/* Logo */}
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center justify-between">
            {isOpen && (
              <span className="font-bold text-lg">Cloudpaie</span>
            )}
            {!isOpen && (
              <div className="w-full flex justify-center">
                <span className="font-bold text-lg">P</span>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 px-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                currentPage === item.id
                  ? 'bg-gray-600 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && (
                <span className="text-sm">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}