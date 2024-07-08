import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
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
  imports: [HeaderComponent,FooterComponent,NgOptimizedImage,CarouselComponent,ItemsCarouselComponent,ThemeToggleComponent, SkillsComponent, NgFor,AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  skills:any[] = [
    {type: 'html', label: 'HTML', rating: 'w-4/5'},
    {type: 'css', label: 'CSS', rating: 'w-4/5'},
    {type: 'javascript', label: 'JavaScript', rating: 'w-1/2'},
    {type: 'angular', label: 'Angular', rating: 'w-1/2'},
    {type: 'php', label: 'Php', rating: 'w-1/3'},
    {type: 'java', label: 'Java', rating: 'w-1/3'},
    {type: 'python', label: 'Python', rating: 'w-1/3'},
    {type: 'tailwind', label: 'Tailwind', rating: 'w-1/2'},
    {type: 'git', label: 'Git', rating: 'w-1/3'}
  ]

  aside:any[] =[
    {label: 'Sobre mim', href: '#sobreMim'},
    {label: 'Skills',    href: '#skills'},
    {label: 'Projetos',  href: '#projetos'},
    {label: 'Contatos',  href: '#contatos'},
  ]

}
