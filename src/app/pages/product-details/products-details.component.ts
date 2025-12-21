import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink], // ✅ CommonModule REQUIRED
  template: `
<div class="container mt-4" *ngIf="product">
  <h3>{{ product.name }}</h3>
  <p>{{ product.description }}</p>
  <p>Delivery in 3–5 days</p>

  <button class="btn btn-primary" (click)="cart.add(product)">
    Add to Cart
  </button>

  <a routerLink="/cart" class="btn btn-success ms-2">
    Buy Now
  </a>
</div>
`
})
export class ProductDetailsComponent implements OnInit {

  product: any;   // or Product type if imported

  constructor(
    private ps: ProductService,
    public cart: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ps.getProductById(id);
  }
}
