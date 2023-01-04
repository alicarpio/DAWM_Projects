import {Component} from '@angular/core';
import {MakeupProduct} from '../makeup-product'
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  makeups!: MakeupProduct[]

  constructor(private cartService: CartService) {
    let makeupData = JSON.parse(localStorage.getItem("makeupData")!);

    if (makeupData) {
      this.makeups = makeupData as MakeupProduct[]
    }
  }

  // addToCart(){
  //   this.cartService.addToCart(this.makeups)
  // }
}
