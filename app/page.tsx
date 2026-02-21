import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jarvis App',
  description: 'Welcome to Jarvis',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to <span className="text-blue-600">Jarvis</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Please login to continue
      </p>
    </div>
  );
}