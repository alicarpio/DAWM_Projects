export default class MakeupService{
    constructor() {
        throw Error("Cannot instantiate abstract class MakeupService");
    }

    /**
     * @return An array of all makeup products .
     */
    async findAll({offset,limit}){
        throw Error("No implemented")
    }
}