import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-items-carousel',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './items-carousel.component.html',
  styleUrl: './items-carousel.component.scss'
})
export class ItemsCarouselComponent {

}
