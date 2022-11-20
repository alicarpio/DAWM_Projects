import MakeupService from "./MakeupService.js";
import createMU from "/src/domain/Makeup.js";


const URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export default class MakeupApiService extends MakeupService {
    #makeupData;

    constructor() {
        super();
        this.#makeupData = new Map();
    }

    async getAllProducts() {
        displayLoading()
        console.log('cargando')
        const resp = await fetch(URL);
        const datos = await resp.json();
        hideLoading()
        console.log('cargando 2')
        sectionMakeupProduct.style.display = 'block';
        datos.forEach((mp) => {
            const makeup = new createMU({
                id: mp["id"],
                brand: mp["brand"],
                name: mp["name"],
                image_link: mp["image_link"],
                description: mp["description"],
                price: parseFloat(mp["price"]),
                rating: mp["rating"],
                category: mp["category"],
                product_type: mp["product_type"],
                product_colors: mp["product_colors"],
                tag_list: mp["tag_list"],
            });
            this.#makeupData.set(mp["id"], makeup);
        });
        return this.#makeupData;
    }
}

const sectionMakeupProduct = document.querySelector( "#makeupProducts")
const loader = document.querySelector( "#loading")

function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 20000);
}

// hiding loading
function hideLoading() {
    loader.classList.remove("display");
    loader.style.display = 'none'
}