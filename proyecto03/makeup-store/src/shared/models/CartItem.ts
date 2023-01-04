import {MakeupProduct} from "../../app/makeup-product";
import {Makeup} from "./Makeup";

export class CartItem {
  constructor(makeup: MakeupProduct) {
    this.makeup = makeup;

  }

  makeup: MakeupProduct;
  quantity: number = 1;

  get price(): number {
    return parseInt(this.makeup.price) * this.quantity;
  }

}
