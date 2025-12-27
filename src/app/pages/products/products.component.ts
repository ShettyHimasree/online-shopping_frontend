import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./ products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
