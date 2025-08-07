import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ItemsCarouselComponent } from '../items-carousel/items-carousel.component';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';
import { SkillsComponent } from '../skills/skills.component';
import { AsideComponent } from '../aside/aside.component';
import { SocialIconComponent } from '../shared/social-icon/social-icon.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    NgOptimizedImage,
    CarouselComponent,
    ItemsCarouselComponent,
    ThemeToggleComponent,
    SkillsComponent,
    NgFor,
    AsideComponent,
    SocialIconComponent,
    ExperienceComponent
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
    {label: 'Sobre mim', href: '#sobreMim'},
    {label: 'Skills',    href: '#skills'},
    {label: 'Experiência', href: '#experience'},
    {label: 'Projetos',  href: '#projetos'},
    {label: 'Contatos',  href: '#contatos'},
  ]

  title = 'Meu Projeto Angular';
  accessCount: number = 0;

  constructor() {}



}
