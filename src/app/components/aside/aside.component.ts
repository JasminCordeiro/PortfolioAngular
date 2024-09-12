import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  @Input() id!: number;
  @Input() label!: string;
  @Input() href!: string;

  exitTime:  Date;

  constructor(){
    this.exitTime = new Date();
  }
}
