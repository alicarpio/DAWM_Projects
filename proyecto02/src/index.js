import createMU from "./domain/Makeup.js";

const makeups = new Map();

const cargarMakeup = async () => {
    const resp = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
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
        makeups.set(mp["id"], makeup);
        // console.log(typeof(mp['id']))
    });
    // let ii = 1;
    // console.log(makeups.get(8)['image_link']);

    let i = 1;
    const cardImgs = document.querySelectorAll('img')
    const loadImage = () => {
        console.log(cardImgs)
        cardImgs.forEach((imgTag) => {
            let imagelink = makeups.get(i)['image_link'];
            console.log(imgTag)
            imgTag.src = imagelink
            i++;

        })
    };
    loadImage()
};


cargarMakeup()






