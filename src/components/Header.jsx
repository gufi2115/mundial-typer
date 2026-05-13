import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b-2 border-emerald-500 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⚽</span>
            <h1 className="text-white font-bold text-xl hidden sm:block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Mundial Bet 2026
            </h1>
            <h1 className="text-white font-bold text-lg sm:hidden bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              MundialBet
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#dashboard"
              className="text-gray-300 hover:text-emerald-400 transition duration-200"
            >
              Dashboard
            </a>
            <a
              href="#matches"
              className="text-gray-300 hover:text-emerald-400 transition duration-200"
            >
              Matches
            </a>
            <a
              href="#leaderboard"
              className="text-gray-300 hover:text-emerald-400 transition duration-200"
            >
              Leaderboard
            </a>
          </nav>

          {/* Profile and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition duration-200 text-white">
              <User size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              {isOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 p-4">
              <a
                href="#dashboard"
                className="text-gray-300 hover:text-emerald-400 py-2 transition duration-200"
              >
                Dashboard
              </a>
              <a
                href="#matches"
                className="text-gray-300 hover:text-emerald-400 py-2 transition duration-200"
              >
                Matches
              </a>
              <a
                href="#leaderboard"
                className="text-gray-300 hover:text-emerald-400 py-2 transition duration-200"
              >
                Leaderboard
              </a>
              <a
                href="#predictions"
                className="text-gray-300 hover:text-emerald-400 py-2 transition duration-200"
              >
                My Predictions
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
