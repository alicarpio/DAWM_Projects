import MakeupService from "./MakeupService.js";
import createMU from "/src/domain/Makeup.js";

const URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx";

export default class MakeupApiService extends MakeupService {
  #makeupData;

  constructor() {
    super();
    this.#makeupData = new Map();
  }

  async getAllProducts() {
    const resp = await fetch(URL);
    const datos = await resp.json();
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

  async findbyName(name) {
    const makeupsByBrand = [];

    for (const [_, makeup] of this.#makeupData) {
      if (makeup["name"].toLowerCase().includes(name)) {
        makeupsByBrand.push(makeup);
      }
    }

    return makeupsByBrand;
  }

  async getTopFiveNyxProducts() {
    // TODO: This can be done once upon class initialization to avoid
    //       computing it every time the function is called.

    if (this.#makeupData.size === 0) await this.getAllProducts();

    const nyxProductTotalRanks = new Map();

    for (const product of this.#makeupData.values()) {
      const productRank = product.rating;
      const productName = product.name;

      nyxProductTotalRanks.set(
        productName,
        (nyxProductTotalRanks.get(productName) ?? 0) + productRank
      );
    }

    return [...nyxProductTotalRanks.keys()]
      .map((productoName) => [
        productoName,
        nyxProductTotalRanks.get(productoName),
      ])
      .sort(([_n1, r1], [_n2, r2]) => {
        return r2 - r1;
      })
      .slice(0, 6);
  }

  // FIXME: Change this to getProductsByCategory
  async getProductsByTag() {
    if (this.#makeupData.size === 0) await this.getAllProducts();

    const productsByTag = new Map();

    for (const product of this.#makeupData.values()) {
      const productCategory = product.category.category;
      productsByTag.set(
        productCategory,
        (productsByTag.get(productCategory) ?? 0) + 1
      );
    }

    return [...productsByTag.entries()].filter(
      ([category, _]) =>
        category === "liquid" ||
        category === "powder" ||
        category === "concealer" ||
        category === "gel" ||
        category === "pencil"
    );
  }
}
