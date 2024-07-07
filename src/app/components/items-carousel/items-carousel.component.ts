import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ItemComponent } from './item/item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-items-carousel',
  standalone: true,
  imports: [CarouselComponent,ItemComponent,NgFor],
  templateUrl: './items-carousel.component.html',
  styleUrl: './items-carousel.component.scss'
})
export class ItemsCarouselComponent {

  items = [
    { label: 'LinkHub', img: './assets/yourlinkhubdark.png' },
    { label: 'Item 2', img: 'assets/img/item2.jpg' },
    { label: 'Item 3', img: 'assets/img/item3.jpg' },
    { label: 'Item 4', img: 'assets/img/item4.jpg' },
    { label: 'Item 5', img: 'assets/img/item5.jpg' },
    { label: 'Item 5', img: 'assets/img/item5.jpg' },
    { label: 'Item 5', img: 'assets/img/item5.jpg' },
    { label: 'Item 5', img: 'assets/img/item5.jpg' },

  ];

}
