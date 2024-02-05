import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})

export class ProductDetailComponent {
  @Input() id?: string;
  product = signal<Product | null>(null);
  coverImg = signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService)

  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.coverImg.set(product.images[0])
          } 
        },
      });
    }
  }

  // Función que cambia la foto mostrada en grande
  changeCover(newImg: string) {
    this.coverImg.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) 
      this.cartService.addToCart(product);
  }
}
