import createRating from "./MakeupRating";
import createId from "./MakeupId.js";
import createPrice from "./MakeupPrice";
import createCategory from "./MakeupCategory";
import createType from "./MakeupProductType";

class Makeup {
  id;
  brand;
  name;
  image_link;
  description;
  price;
  rating;
  category;
  product_type;
  product_colors;
  tag_list;

  constructor(
    id,
    brand,
    name,
    image_link,
    description,
    price,
    rating,
    category,
    product_type,
    product_colors,
    tag_list
  ) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.image_link = image_link;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.product_type = product_type;
    this.product_colors = product_colors;
    this.tag_list = tag_list;
  }

  toString() {
    return `Makeup{
            id=${this.id},
            brand=${this.brand},
            name=${this.name}
            image_link=${this.image_link}
            description=${this.description}
            price=${this.price}
            rating=${this.rating}
            category=${this.category}
            product_type=${this.product_type}
            product_colors=${this.product_colors}
            tag_list=${this.tag_list}
        }`;
  }
}

export default function createMU({
  id,
  brand,
  name,
  image_link,
  description,
  price,
  rating,
  category,
  product_type,
  product_colors,
  tag_list,
}) {
  return Object.freeze(
    new Makeup(
      createId(id),
      brand,
      name,
      image_link,
      description,
      createPrice(price),
      createRating(rating),
      createCategory(category),
      createType(product_type),
      product_colors,
      tag_list
    )
  );
}
