import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Experience {
  company: string;
  logo: string;
  period: {
    start: string;
    end: string;
  };
  roleKey: string;
  typeKey: string;
  summaryKey: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="flex flex-col space-y-8">
      <div *ngFor="let exp of experiences; let last = last" class="relative flex items-start group">
        <!-- Linha vertical (não mostrar no último item) -->
        <div *ngIf="!last" class="absolute left-8 top-20 h-[calc(100%-5rem)] w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        <!-- Logo da empresa -->
        <div class="flex-shrink-0 w-18 h-18">
          <img [src]="exp.logo" [alt]="exp.company + ' logo'" class="w-16 h-16 rounded-lg object-contain bg-white p-2 shadow-md dark:bg-gray-800">
        </div>

        <!-- Conteúdo -->
        <div class="ml-6 flex-grow">
          <div class="flex items-center justify-between space-x-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{exp.company}}</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{exp.period.start}} - {{exp.period.end}}</span>
          </div>

          <div class="mt-2">
                      <h4 class="text-lg font-semibold text-mypurple dark:text-mypurple">{{exp.roleKey | translate}}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-300">{{exp.typeKey | translate}}</p>
                      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 whitespace-normal break-words">{{exp.summaryKey | translate}}</p>
          </div>

          <!-- Technologies -->
          <div class="mt-3 flex flex-wrap gap-2">
            <span *ngFor="let tech of exp.technologies"
                  class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-mygray2 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-mygray3 card-transition">
              {{tech}}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [
    {
      company: 'Asaas',
      logo: './assets/companies/asaas.jpeg',
      period: {
        start: '07/2025',
        end: 'Atual'
      },
      roleKey: 'EXPERIENCE.ASAAS_JR.ROLE',
      typeKey: 'EXPERIENCE.ASAAS_JR.TYPE',
      summaryKey: 'EXPERIENCE.ASAAS_JR.SUMMARY',
      technologies: ['C#', 'Node.js','Python',  'RabbitMQ', 'Docker','Azure']
    },
    {
      company: 'Asaas',
      logo: './assets/companies/asaas.jpeg',
      period: {
        start: '09/2024',
        end: '06/2025'
      },
      roleKey: 'EXPERIENCE.ASAAS_INTERN.ROLE',
      typeKey: 'EXPERIENCE.ASAAS_INTERN.TYPE',
      summaryKey: 'EXPERIENCE.ASAAS_INTERN.SUMMARY',
      technologies: ['C#', 'Azure', 'Node.js', 'RabbitMQ']
    },
    {
      company: 'Sicoob Credimepi',
      logo: './assets/companies/sicoob.png',
      period: {
        start: '04/2023',
        end: '08/2024'
      },
      roleKey: 'EXPERIENCE.SICOOB.ROLE',
      typeKey: 'EXPERIENCE.SICOOB.TYPE',
      summaryKey: 'EXPERIENCE.SICOOB.SUMMARY',
      technologies: ['Scrum', 'Metodologias Ágeis']
    },
    {
      company: 'UFOP',
      logo: './assets/companies/ufop.png',
      period: {
        start: '2022',
        end: 'Atual'
      },
      roleKey: 'EXPERIENCE.UFOP.ROLE',
      typeKey: 'EXPERIENCE.UFOP.TYPE',
      summaryKey: 'EXPERIENCE.UFOP.SUMMARY',
      technologies: []
    }
  ];
}
