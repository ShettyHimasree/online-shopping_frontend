import { Component } from '@angular/core';

@Component({ standalone: true, template: `
<div class="container mt-4">
  <h3>Signup</h3>
  <input class="form-control mb-2" placeholder="Name">
  <input class="form-control mb-2" placeholder="Email">
  <input class="form-control mb-2" type="password" placeholder="Password">
  <button class="btn btn-success">Register</button>
</div>`})
export class SignupComponent {}
