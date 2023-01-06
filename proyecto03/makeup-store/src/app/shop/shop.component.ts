import {Component, OnInit} from '@angular/core';
import {MakeupProduct} from '../makeup-product'
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  makeups!: MakeupProduct[]
  public totalItem: number =0;

  constructor(private cartService: CartService) {
    let makeupData = JSON.parse(localStorage.getItem("makeupData")!);

    if (makeupData) {
      this.makeups = makeupData as MakeupProduct[]
    }
  }

  ngOnInit():void {
    this.makeups.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item);
  }
}
