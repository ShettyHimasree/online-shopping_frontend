import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  cart: CartItem[] = [];

  add(product: Product) {
    const item = this.cart.find(i => i.product.id === product.id);
    item ? item.quantity++ : this.cart.push({ product, quantity: 1 });
  }

  remove(item: CartItem) {
    this.cart = this.cart.filter(i => i !== item);
  }

  increase(item: CartItem) {
    item.quantity++;
  }

  decrease(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
  }

  count() {
    return this.cart.reduce((s, i) => s + i.quantity, 0);
  }

  total() {
    return this.cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  }
}
