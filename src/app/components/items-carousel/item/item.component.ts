import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TechIconComponent, TechType } from '../../shared/tech-icon/tech-icon.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() type!: TechType;
  @Input() label!: string;
  @Input() img!: string;
  @Input() projectUrl!: string;

  readonly technologies: TechType[] = [
    'html',
    'css',
    'javascript',
    'angular',
    'php',
    'java',
    'python',
    'tailwind',
    'git',
    'csharp'
  ];
}
