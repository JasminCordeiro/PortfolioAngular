import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
    const themeToggleDarkIcon = this.elementRef.nativeElement.querySelector('#theme-toggle-dark-icon');
    const themeToggleLightIcon = this.elementRef.nativeElement.querySelector('#theme-toggle-light-icon');
    const themeToggleBtn = this.elementRef.nativeElement.querySelector('#theme-toggle');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
    }

    // Add click event listener to the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // toggle theme class on the document
      const isDarkTheme = document.documentElement.classList.contains('dark');
      if (isDarkTheme) {
        this.renderer.removeClass(document.documentElement, 'dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        this.renderer.addClass(document.documentElement, 'dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });
  }
}}

