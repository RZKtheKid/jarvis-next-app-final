'use client';

import { Header } from './components/header';
import { useTheme } from './theme-provider';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="flex flex-col items-center justify-center p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 mt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Jarvis</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Please login to continue
        </p>
      </div>
    </div>
  );
}