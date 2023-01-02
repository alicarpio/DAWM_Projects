import {Component} from '@angular/core';
import {MakeupProduct} from '../makeup-product'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  makeups!: MakeupProduct[]

  constructor() {
    let makeupData = JSON.parse(localStorage.getItem("makeupData")!);

    if (makeupData) {
      this.makeups = makeupData as MakeupProduct[]
    }
  }
}
