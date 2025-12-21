import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  template: `
<div class="container mt-4">
  <div class="card mb-3" *ngFor="let p of products">
    <div class="card-body">
      <h5>{{p.name}}</h5>
      <p>₹ {{p.price}}</p>
      <a [routerLink]="['/product', p.id]" class="btn btn-sm btn-primary">View</a>
    </div>
  </div>
</div>`,
  imports: [CommonModule, RouterLink]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }
}
