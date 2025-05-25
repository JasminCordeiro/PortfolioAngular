import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TechType = 'html' | 'css' | 'javascript' | 'angular' | 'php' | 'java' | 'python' | 'tailwind' | 'git' | 'csharp';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [class]="containerClass">
      <img 
        [src]="'../../../../assets/vectors/' + type + '.svg'"
        [alt]="type + ' icon'"
        class="w-6 h-6"
      />
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TechIconComponent {
  @Input() type!: TechType;
  @Input() containerClass: string = 'flex justify-center items-center flex-col p-4 bg-white dark:bg-mygray2 bg-gray-100 border dark:border-mygray3 rounded-lg shadow transition-transform duration-500 transform hover:scale-110 hover:border-mypurple dark:hover:border-mypurple';
} 