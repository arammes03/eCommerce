import { Component, inject, signal } from '@angular/core';

//Import componentes
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

// Import modelos
import { Product } from '../../../shared/models/product.model';

// Import servicios
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // Signals
  products = signal<Product[]>([]);

  // Servicios
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  // Función que nos agrega un producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
