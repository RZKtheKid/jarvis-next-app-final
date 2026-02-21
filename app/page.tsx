'use client';

import { useTheme } from './theme-provider';
import './globals.css';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Jarvis</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Please login to continue
        </p>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}