import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LanguageService } from './services';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  private readonly languageService = inject(LanguageService);

  ngOnInit(): void {
      this.languageService.initLanguage();
      initFlowbite();
  }
}
