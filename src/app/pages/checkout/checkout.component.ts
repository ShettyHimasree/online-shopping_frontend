import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
<div class="container mt-4">
  <h3>Address & Order</h3>

  <input class="form-control mb-2" placeholder="Address">
  <input class="form-control mb-2" placeholder="City">
  <input class="form-control mb-2" placeholder="Pincode">

  <button class="btn btn-primary">Place Order</button>
</div>
`
})
export class CheckoutComponent {}
