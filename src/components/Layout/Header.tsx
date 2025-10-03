import { Menu} from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  currentPageTitle: string;
  onToggleSidebar: () => void;
}

export const Header = ({ sidebarOpen, currentPageTitle, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? (
              <Menu className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <h1 className="text-xl font-semibold text-gray-800">
            {currentPageTitle}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}