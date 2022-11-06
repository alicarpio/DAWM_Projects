import * as _ from "loadash";
import IllegalArgumentException from "./common/IllegalArgumentException.js";

class MakeupRating {
    constructor(rating) {
        this.rating = rating;
    }

    toString() {
        return this.rating;
    }
}

export default function createRating(rating) {
    if (!_.isNumber(rating)) {
        throw new IllegalArgumentException(`Invalid value for rating, expected a number but got: ${rating}`);
    }

    if (rating < 1 || rating >= 5) {
        throw new IllegalArgumentException(`Invalid value for rating, out of valid range: ${rating}`);
    }
    return new MakeupRating(rating);
}