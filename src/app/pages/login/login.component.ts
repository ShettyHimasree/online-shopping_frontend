import { Component } from '@angular/core';

@Component({ standalone: true, template: `
<div class="container mt-4">
  <h3>Login</h3>
  <input class="form-control mb-2" placeholder="Email">
  <input class="form-control mb-2" type="password" placeholder="Password">
  <button class="btn btn-primary">Login</button>
</div>`})
export class LoginComponent {}
