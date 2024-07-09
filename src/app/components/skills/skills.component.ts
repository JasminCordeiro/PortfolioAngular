import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent   {

  @Input() type!: string;
  @Input() label!: string;
  @Input() progress!: string;


}
