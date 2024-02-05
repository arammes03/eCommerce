import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = inject(HttpClient); // Permite hacer requests a http

  constructor() { }

  getAllCategories() {
    return this.url.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }

  getCategory() {
    return this.url.get
  }
}
