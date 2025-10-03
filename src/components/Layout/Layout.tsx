import { useState, type ReactNode } from 'react';
import {Sidebar} from './Sidebar';
import {Header} from './Header';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  currentPageTitle: string;
  onPageChange: (page: string) => void;
}

export const Layout = ({ children, currentPage, currentPageTitle, onPageChange }: LayoutProps) =>  {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          sidebarOpen={sidebarOpen}
          currentPageTitle={currentPageTitle}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page Content (Outlet) */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}