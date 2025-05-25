import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'color-theme';

  isDarkTheme(): boolean {
    if (typeof localStorage === 'undefined') return false;
    
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  setTheme(isDark: boolean): void {
    if (typeof localStorage === 'undefined') return;
    
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }
} 