import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = inject(HttpClient); // Permite hacer requests a http

  getProducts(category?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category)
      url.searchParams.set('categoryId', category);
    return this.url.get<Product[]>(url.toString());
  }

  getProduct(id: string) {
    return this.url.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

  constructor() {}
}
