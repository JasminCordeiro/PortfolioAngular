import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="href" class="flex items-center" [target]="target">
      <svg 
        [class]="'w-10 h-10'" 
        class="dark:text-white text-[#1F2937] transition-colors duration-1000"
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        [attr.width]="size" 
        [attr.height]="size" 
        [attr.fill]="fill"
        [attr.viewBox]="viewBox"
      >
        <path 
          [attr.d]="svgPath" 
          [attr.fill-rule]="fillRule"
          [attr.stroke]="stroke"
          [attr.stroke-linecap]="strokeLinecap"
          [attr.stroke-width]="strokeWidth"
        />
        <path 
          *ngIf="secondaryPath"
          [attr.d]="secondaryPath" 
        />
      </svg>
      <span class="ml-2 dark:text-white text-[#1F2937] font-semibold transition-colors duration-1000">
        {{label}}
      </span>
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SocialIconComponent {
  @Input() href!: string;
  @Input() label!: string;
  @Input() size: string = '24';
  @Input() fill: string = 'currentColor';
  @Input() viewBox: string = '0 0 24 24';
  @Input() target: string = '_blank';
  @Input() svgPath!: string;
  @Input() secondaryPath?: string;
  @Input() fillRule?: string;
  @Input() stroke?: string;
  @Input() strokeLinecap?: string;
  @Input() strokeWidth?: string;
} 