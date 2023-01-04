import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MakeupProduct} from "../makeup-product";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  makeup!: MakeupProduct;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      let makeupData = JSON.parse(localStorage.getItem("makeupData")!);

      if(makeupData) {
        let makeups = makeupData as Array<MakeupProduct>
        let  makeupsfiltered = makeups.filter(makeup => makeup["id"] == id)
        this.makeup = makeupsfiltered[0];
      }

    });

  }

}
