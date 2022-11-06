class Makeup {
    id;
    brand;
    name;
    price;
    rating;
    category;
    product_type;
    tag_list;

    constructor(
        id,
        brand,
        name,
        price,
        rating,
        category,
        product_type,
        tag_list
    ) {
        this.id = id;
        this.brand = category;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.category = category;
        this.product_type = product_type;
        this.tag_list = tag_list;
    }
}

export default function createMU(
    id,
    brand,
    name,
    price,
    rating,
    category,
    product_type,
    tag_list
){
    return Object.freeze(new Makeup(id,brand,name,price,rating,category,product_type,tag_list))
}

