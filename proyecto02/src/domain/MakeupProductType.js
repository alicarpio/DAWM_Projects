import * as _ from 'lodash'
import IllegalArgumentException from "./common/IllegalArgumentException.js";

let productTypes = ['blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow', 'foundation', 'lip_liner',
    'lipstick', 'mascara', 'nail_polish']

class MakeupProductType {
    constructor(productType) {
        this.product_type = productType;
    }

    toString(){
        return this.product_type;
    }
}

export default function createType(productType) {

    if (_.isEmpty(productTypes) || !productTypes.includes(productType)) {
        throw new IllegalArgumentException(`Invalid type of product: ${productType}`)
    }

    return Object.freeze(new MakeupProductType(productType));
}


