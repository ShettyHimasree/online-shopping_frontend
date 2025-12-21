import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<div class="container mt-4">
  <h3>Cart</h3>

  <div *ngFor="let item of cart.cart">
    {{item.product.name}} × {{item.quantity}}
    <button (click)="cart.increase(item)">+</button>
    <button (click)="cart.decrease(item)">-</button>
    <button (click)="cart.remove(item)">Remove</button>
  </div>

  <h4 class="mt-3">Total: ₹ {{cart.total()}}</h4>
  <a routerLink="/checkout" class="btn btn-success mt-2">Checkout</a>
</div>
`
})
export class CartComponent {
  constructor(public cart: CartService) {}
}
