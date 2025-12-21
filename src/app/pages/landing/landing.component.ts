import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<div class="container text-center mt-5">
  <h1>Welcome to ShopIn</h1>
  <p>Your one-stop shop for all your needs!</p>
  <a routerLink="/products" class="btn btn-primary mt-3">Shop Now</a>
</div>
`
})
export class LandingComponent {}
