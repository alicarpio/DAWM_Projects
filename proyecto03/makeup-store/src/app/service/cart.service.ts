import {Injectable} from '@angular/core';
import {Cart} from "../../shared/models/Cart";
import {Makeup} from "../../shared/models/Makeup";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {
  }

  // addToCart(makeup: Makeup): void {
  //   let cartItem = this.cart.items.find((item) => item.makeup.id === makeup.id)
  //   if (cartItem) {
  //     this.changeQuantity(makeup.id, cartItem.quantity + 1)
  //     return
  //   }
  //   this.cart.items.push(new cartItem(makeup))
  // }

  getCart():Cart{
    return this.cart
  }
}
