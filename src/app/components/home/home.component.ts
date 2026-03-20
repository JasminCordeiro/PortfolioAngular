import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import { ItemsCarouselComponent } from '../items-carousel/items-carousel.component';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';
import { SkillsComponent } from '../skills/skills.component';
import { AsideComponent } from '../aside/aside.component';
import { ExperienceComponent } from '../experience/experience.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    ItemsCarouselComponent,
    ThemeToggleComponent,
    SkillsComponent,
    NgFor,
    AsideComponent,
    ExperienceComponent,
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills:any[] = [
    {type: 'html', label: 'HTML'},
    {type: 'css', label: 'CSS'},
    {type: 'javascript', label: 'JavaScript'},
    {type: 'angular', label: 'Angular'},
    {type: 'csharp', label: 'C#'},
    {type: 'python', label: 'Python'},
    {type: 'tailwind', label: 'Tailwind'},
    {type: 'git', label: 'Git'},
    {type: 'docker', label: 'Docker'},
  ]

  aside:any[] =[
    {labelKey: 'NAV.ABOUT', href: '#sobreMim'},
    {labelKey: 'NAV.SKILLS', href: '#skills'},
    {labelKey: 'NAV.EXPERIENCE', href: '#experience'},
    {labelKey: 'NAV.EDUCATION', href: '#education'},
    {labelKey: 'NAV.PROJECTS', href: '#projetos'},
    {labelKey: 'NAV.CONTACT', href: '#contatos'},
  ]

  title = 'Meu Projeto Angular';
  accessCount: number = 0;

  constructor() {}



}
