import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = inject(HttpClient); // Permite hacer requests a http

  getProducts() {
    return this.url.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: string) {
    return this.url.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  constructor() {}
}
