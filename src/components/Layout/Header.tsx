import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

      </div>

      <div className="flex items-center space-x-4">

        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">Administrateur</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
