import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true); // Señal que guarda el estado del menú (visible/no visible)

  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);

  // Función que cambiará el estado de la señal
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  // Función que calcula el precio total del carrito
  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal());
    }
  }
}
