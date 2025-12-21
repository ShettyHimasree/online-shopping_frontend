import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 55000, description: 'High performance laptop' },
    { id: 2, name: 'Mobile', price: 30000, description: 'Latest Android phone' },
    { id: 3, name: 'Headphones', price: 2500, description: 'Noise cancelling headphones' },
    { id: 4, name: 'Keyboard', price: 1500, description: 'Mechanical keyboard' },
    { id: 5, name: 'Mouse', price: 800, description: 'Wireless mouse' }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
