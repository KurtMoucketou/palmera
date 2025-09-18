import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Utensils } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const navigation = [
    { name: 'Accueil', id: 'home' },
    { name: 'À Propos', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Prestations', id: 'prestations' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onPageChange('home')}>
            {/* <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg"> */}
              <img src="../public/images/palmera_restauration_logo.png" className="w-8 h-8 text-white" />
              {/* <Utensils className="w-6 h-6 text-white" /> */}
            {/*</div>*/}
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Palmera</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Restauration sur mesure</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item.id
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};