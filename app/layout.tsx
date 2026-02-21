import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';

export const metadata: Metadata = {
  title: 'Jarvis App',
  description: 'Welcome to Jarvis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}