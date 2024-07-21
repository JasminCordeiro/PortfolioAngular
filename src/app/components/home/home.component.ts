import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ItemsCarouselComponent } from '../items-carousel/items-carousel.component';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';
import { SkillsComponent } from '../skills/skills.component';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,NgOptimizedImage,CarouselComponent,ItemsCarouselComponent,ThemeToggleComponent, SkillsComponent, NgFor,AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills:any[] = [
    {type: 'html', label: 'HTML', progress: 'w-4/5'},
    {type: 'css', label: 'CSS', progress: 'w-2/4'},
    {type: 'javascript', label: 'JavaScript', progress: 'w-1/2'},
    {type: 'angular', label: 'Angular', progress: 'w-1/2'},
    {type: 'php', label: 'Php', progress: 'w-1/4'},
    {type: 'java', label: 'Java', progress: 'w-1/4'},
    {type: 'python', label: 'Python', progress: 'w-1/4'},
    {type: 'tailwind', label: 'Tailwind', progress: 'w-1/2'},
    {type: 'git', label: 'Git', progress: 'w-1/3'}
  ]

  aside:any[] =[
    {label: 'Sobre mim', href: '#sobreMim'},
    {label: 'Skills',    href: '#skills'},
    {label: 'Projetos',  href: '#projetos'},
    {label: 'Contatos',  href: '#contatos'},
  ]

}
