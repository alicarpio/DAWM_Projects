import IllegalArgumentException from "./common/IllegalArgumentException.js";
import * as _ from 'lodash';

let makeupCategories = ['powder', 'cream', 'pencil', 'liquid', 'gel', 'palette', 'pencil', 'concealer', 'contour', 'bb_cc', 'mineral', 'highlighter', 'lipstick', 'lip_gloss', 'lip_stain', 'none'];

class MakeupCategory {
    constructor(category) {
        this.category = category;
    }

    toString(){
        return this.category;
    }
}

export default function createCategory(category) {
    if (_.isEmpty(category)) {
        return Object.freeze(new MakeupCategory('none'))
    }

    if (!makeupCategories.includes(category)) {
        throw new IllegalArgumentException(`Invalid category for product: ${category}`)
    }
    return Object.freeze(new MakeupCategory(category))
}