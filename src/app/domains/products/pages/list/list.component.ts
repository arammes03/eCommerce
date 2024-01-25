import { Component, signal } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

// Import modelos
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 200,
        img: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 600,
        img: 'https://picsum.photos/640/640?r=55',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 3,
        img: 'https://picsum.photos/640/640?r=45',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 200,
        img: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 600,
        img: 'https://picsum.photos/640/640?r=55',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 3,
        img: 'https://picsum.photos/640/640?r=45',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('Mensaje del padre');
    console.log(event);
  }
}
