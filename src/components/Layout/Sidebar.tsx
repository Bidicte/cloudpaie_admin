import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  FileText,
  User2
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', href: '/', icon: LayoutDashboard },
  { name: 'Utilisateurs', href: '/utilisateurs', icon: User2 },
  { name: 'Mot de passe', href: '/mdp', icon: Users },
  { name: 'Authentification 2F', href: '/auth', icon: DollarSign },
  { name: 'Roles', href: '/role', icon: FileText },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-yellow-400">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-yellow-400 text-center">Cloudpaie</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-150 ${
                isActive
                  ? 'bg-yellow-600 text-white'
                  : 'text-slate-300 hover:bg-blue-400 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      
    </div>
  );
}
