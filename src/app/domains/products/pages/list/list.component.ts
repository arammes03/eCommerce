import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

//Import componentes
import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Category } from '@shared/models/category.model';

// Import modelos
import { Product } from '@shared/models/product.model';

// Import servicios
import { CartService } from '@shared/services/cart.service';
import { CategoryService } from '@shared/services/category.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export default class ListComponent {
  // Signals
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  // Servicios
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  // Inputs
  @Input() category?: string;

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  ngOnInit() {
    this.getCategories();
  }

  // Función que nos agrega un producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private getCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
