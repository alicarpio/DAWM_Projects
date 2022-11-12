import * as _ from 'lodash'
import IllegalArgumentException from "./common/IllegalArgumentException.js";

class MakeupPrice{
    constructor(price) {
        this.price = price;
    }

    toString(){
        return this.price;
    }
}

export default function createPrice(price){
    if(price === null){
        return Object.freeze(new MakeupPrice(0.0))
    }

    if(!_.isNumber(price)){
        console.log(typeof(price))
        throw new IllegalArgumentException(`Invalid value for price, expected a number but got: ${price}`)
    }

    return Object.freeze(new MakeupPrice(price));
}