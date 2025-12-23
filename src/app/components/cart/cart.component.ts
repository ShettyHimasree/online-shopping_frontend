import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  isLoggedIn: boolean = false;

  totalPrice = 0;

  constructor(private cartService: CartServiceService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.loadCart();
    }
  }

  loadCart(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice(items);
    });
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId).subscribe(() => {
      this.loadCart(); // Reload cart after removal
    });
  }

  // clearCart(): void {
  //   this.cartService.clearCart().subscribe(() => {
  //     this.loadCart(); // Reload cart after clearing
  //   });
  // }
}




// dummy data----------------------------------

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   // Dummy data to simulate cart items
//   cartItems = [
//     {
//       id: 1,
//       name: 'Product 1',
//       description: 'This is a sample product',
//       price: 20.99,
//       quantity: 2,
//       image: 'https://via.placeholder.com/150' // Placeholder image
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       description: 'Another sample product',
//       price: 10.50,
//       quantity: 1,
//       image: 'https://via.placeholder.com/150' // Placeholder image
//     }
//   ];

//   // Simulate cart total
//   cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

//   constructor() { }

//   ngOnInit(): void {
//     // Commented code to fetch from backend, replace with your API when ready.
//     // this.cartService.getCartItems().subscribe(items => {
//     //   this.cartItems = items;
//     //   this.updateCartTotal();
//     // });
//   }

//   // Simulate removing item from cart
//   removeItem(itemId: number): void {
//     this.cartItems = this.cartItems.filter(item => item.id !== itemId);
//     this.updateCartTotal();
//   }

//   // Calculate total price after removing an item
//   updateCartTotal(): void {
//     this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//   }

//   // Simulate checkout (empty the cart)
//   checkout(): void {
//     this.cartItems = [];
//     this.cartTotal = 0;
//   }

// }
