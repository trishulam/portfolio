'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemPreference;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.className = newTheme;
    
    // Analytics event
    if (typeof window !== 'undefined' && (window as unknown as { gtag: (event: string, name: string, params: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (event: string, name: string, params: Record<string, string>) => void }).gtag('event', 'theme_toggle', {
        event_category: 'ui_interaction',
        event_label: newTheme
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 rounded-full border border-border hover:border-accent"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
}
