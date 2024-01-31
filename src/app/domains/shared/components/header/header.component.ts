import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true); // Señal que guarda el estado del menú (visible/no visible)
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  // Función que cambiará el estado de la señal
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
