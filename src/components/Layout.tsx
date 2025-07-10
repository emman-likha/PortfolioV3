import React from 'react';
import { Navigation } from './Navigation';
import { GridBackground } from './GridBackground';
import { CursorEffect } from './CursorEffect';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Function to get current year
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <CursorEffect />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <footer className="relative z-10 py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {getDate()} John Emmanuel Bulaon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};