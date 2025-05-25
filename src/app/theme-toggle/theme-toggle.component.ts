import { DOCUMENT } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  private document = inject(DOCUMENT);
  private themeService = inject(ThemeService);
  
  isDarkTheme = false;

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme();
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.isDarkTheme) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }
}

