import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent implements OnInit {
  currentLanguage = 'pt';

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  setLanguage(language: 'pt' | 'en'): void {
    this.currentLanguage = language;
    this.languageService.useLanguage(language);
  }
}
