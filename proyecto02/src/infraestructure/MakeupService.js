// FIXME: This class belongs in the domain layer.
export default class MakeupService {
  constructor() {}

  /**
   * @return A map of all makeup products .
   */
  async getAllProducts() {
    throw Error("Not implemented");
  }

  /**
   * @return A list of makeup object that have an specific brand  .
   */
  async findbyName(brandName) {
    throw Error("Not implemented");
  }

  async getTopFiveNyxProducts() {
    throw Error("Not implemented");
  }

  async getProductsByTag() {
    throw Error("Not Implemented");
  }
}
