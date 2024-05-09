import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ItemsCarouselComponent } from '../items-carousel/items-carousel.component';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgOptimizedImage,CarouselComponent,ItemsCarouselComponent,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
