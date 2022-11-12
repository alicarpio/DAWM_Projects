import IllegalArgumentException from "./common/IllegalArgumentException.js";
import * as _ from 'lodash';

class MakeupId {
    constructor(id) {
        this.id = id;
    }
    toString(){
        return this.id;
    }

}

export default function createId(id) {
    if (!_.isNumber(id) || id < 1 || id > 1048) {
        throw new IllegalArgumentException(`Invalid makeup id: ${id}`)
    }
    return Object.freeze(new MakeupId(id));
}