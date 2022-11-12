import * as _ from "lodash";
import IllegalArgumentException from "./common/IllegalArgumentException.js";

class MakeupRating {
    constructor(rating) {
        this.rating = rating;
    }
    toString(){
        return this.rating;
    }
}

export default function createRating(rating) {
    if(rating === null){
        return Object.freeze(new MakeupRating(0));
    }

    if (!_.isNumber(rating)) {
        throw new IllegalArgumentException(`Invalid value for rating, expected a number but got: ${rating}`);
    }

    if (rating < 0 || rating > 5) {
        throw new IllegalArgumentException(`Invalid value for rating, out of valid range: ${rating}`);
    }
    return Object.freeze(new MakeupRating(rating));
}