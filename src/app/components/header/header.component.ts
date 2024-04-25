import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  mobileMenuVisible = false;
  mobileMenuActive = false;
    constructor(){}

    ngOnInit(): void {
      // Adiciona um evento de clique a todos os itens do menu
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
          // Fecha o menu ao clicar em um item
          this.closeMobileMenu();
        });
      });
    }

    toggleMobileMenu(): void {
      console.log('Menu toggled');
      this.mobileMenuVisible = !this.mobileMenuVisible;
      this.mobileMenuActive = this.mobileMenuVisible;
    }
    closeMobileMenu(): void {
      this.mobileMenuVisible = false;
      this.mobileMenuActive = false;
    }

}
