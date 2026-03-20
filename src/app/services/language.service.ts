import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly storageKey = 'portfolio.language';
  private readonly supportedLanguages = ['pt', 'en'] as const;
  private readonly defaultLanguage = 'pt';

  constructor() {
    this.translateService.addLangs([...this.supportedLanguages]);
    this.translateService.setDefaultLang(this.defaultLanguage);
  }

  initLanguage(): void {
    const savedLanguage = this.getSavedLanguage();
    const browserLanguage = this.getBrowserLanguage();
    const initialLanguage = savedLanguage ?? browserLanguage ?? this.defaultLanguage;

    this.useLanguage(initialLanguage);
  }

  useLanguage(language: string): void {
    const normalizedLanguage = this.normalizeLanguage(language);

    this.translateService.use(normalizedLanguage);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, normalizedLanguage);
    }
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang || this.translateService.defaultLang || this.defaultLanguage;
  }

  private normalizeLanguage(language: string): string {
    if (this.supportedLanguages.includes(language as 'pt' | 'en')) {
      return language;
    }

    return this.defaultLanguage;
  }

  private getBrowserLanguage(): string | null {
    if (typeof navigator === 'undefined') {
      return null;
    }

    const language = navigator.language?.split('-')[0]?.toLowerCase();
    return language ? this.normalizeLanguage(language) : null;
  }

  private getSavedLanguage(): string | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    const language = localStorage.getItem(this.storageKey);
    return language ? this.normalizeLanguage(language) : null;
  }
}
