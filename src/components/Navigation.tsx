import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll detection for active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-40">
        <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl px-6 py-3">
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
            Emman Likha </span>
        </div>
      </div>

      {/* Theme Toggle - Top Right */}
      <div className="fixed top-6 right-6 z-40 hidden md:block">
        <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl">
          <button
            onClick={toggleTheme}
            className="relative p-4 text-slate-700 dark:text-slate-300 hover:bg-orange-500/10 dark:hover:bg-orange-500/10 transition-all duration-300 group overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </button>
        </div>
      </div>

      {/* Main Navigation - Center */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 md:block">
        <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl">
          <div className="px-6 py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                        isActive
                          ? 'text-orange-600 dark:text-orange-400'
                          : 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400'
                      }`}
                      data-cursor="pointer"
                    >
                      <span className="relative z-10">{item.name}</span>

                      {/* Background hover effect */}
                      <div className={`absolute inset-0 bg-white/20 dark:bg-slate-800/20 rounded-xl transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                      <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`} />

                      {/* Active underline */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300 ${
                        isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-70'
                      }`} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu - Top Right */}
      <div className="fixed top-6 right-6 z-40 md:hidden">
        <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-4 rounded-2xl text-slate-700 dark:text-slate-300 hover:bg-orange-500/10 dark:hover:bg-orange-500/10 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="absolute top-20 left-4 right-4 max-w-sm mx-auto">
            <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6">
                {/* Dark Mode Toggle in Mobile Menu */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/20 dark:border-slate-700/30">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Theme
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="relative p-2 text-slate-700 dark:text-slate-300 hover:bg-orange-500/10 dark:hover:bg-orange-500/10 transition-all duration-300 group overflow-hidden rounded-lg"
                    data-cursor="pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </div>
                  </button>
                </div>
                
                {/* Navigation Links */}
                <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:transform hover:translate-x-1 ${
                        isActive
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/10'
                          : 'text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-500/10 dark:hover:bg-orange-500/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      data-cursor="pointer"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: 'slideInFromTop 0.3s ease-out forwards'
                      }}
                    >
                      {item.name}

                      {/* Active indicator for mobile */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-r-full" />
                      )}
                    </a>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .slide-in-animation {
            animation: slideInFromTop 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
};