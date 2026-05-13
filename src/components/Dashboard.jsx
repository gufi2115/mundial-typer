import React, { useState } from 'react';
import Header from './Header';
import Podium from './Podium';
import UpcomingMatches from './UpcomingMatches';
import Leaderboard from './Leaderboard';
import { BarChart3, History } from 'lucide-react';

export default function Dashboard() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center space-x-2">
            <BarChart3 className="text-emerald-400" size={32} />
            <span>Dashboard</span>
          </h1>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            <History size={20} />
            <span>My Predictions</span>
          </button>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Podium (25%) */}
          <div className="md:col-span-1">
            <Podium />
          </div>

          {/* Middle Column - Upcoming Matches (50%) */}
          <div className="md:col-span-1">
            <UpcomingMatches />
          </div>

          {/* Right Column - Leaderboard (25%) */}
          <div className="md:col-span-1">
            <Leaderboard />
          </div>
        </div>

        {/* Mobile View - Responsive Stacking */}
        <div className="md:hidden space-y-6 mt-8">
          <div className="md:hidden">
            <Podium />
          </div>
          <div className="md:hidden">
            <UpcomingMatches />
          </div>
          <div className="md:hidden">
            <Leaderboard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12 py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>⚽ Mundial Bet 2026 - Predict. Play. Win. 🏆</p>
          <p className="text-sm mt-2">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
