import MakeupService from "../domain/MakeupService";

const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export default class MakeupApiService extends MakeupService{
    constructor(){
        super()
        return this.makeupProduct = [];

    }

    async getAllProducts(){
        const Makeup = <map n></map>
        const makeup = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');

    }
}