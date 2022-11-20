import MakeupApiService from "./infraestructure/MakeupApiService.js";


const productsContainer = document.getElementById('products-container')
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

const main = async () => {
    const makeupService = new MakeupApiService();
    const makeupsInfo = await makeupService.getAllProducts();

    for (const [_, makeup] of makeupsInfo) {
        addProductCard({
            imageLink: makeup['image_link'],
            makeupName: makeup['name'],
            price: makeup['price'],
            brand: makeup['brand'].toString().toUpperCase(),
            category: makeup['category'].toString() === 'none'
                ? makeup['product_type'].toString()
                : makeup['category'].toString()

        })
    }

    let enterEvent;
    let clickEvent;

    searchInput.addEventListener('keyup',(e)=>{
            enterEvent = e;
    })
    searchInput.addEventListener('click',(e)=>{
        clickEvent = e;
    })

    if(enterEvent || clickEvent){

    }
}

function addProductCard({imageLink, makeupName, price, brand, category}) {
    let template = `<div class="col mb-5 product">
                <div class="card h-100">
                    <!-- Product image-->
                    <img
                            class="card-img-top"
                            src="${imageLink}"
                            alt="..."
                    />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder brand">${brand}</h5>
                            <!-- Product name-->
                            <h5 class="fw-bolder name">${makeupName}</h5>
                            <!-- Product reviews-->
                            <div
                                    class="d-flex justify-content-center small text-warning mb-2"
                            >
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            <!-- product category -->
                            <div class="text-xl-left">
                                <span class="fw-bolder h5">Category:</span>
                                <span class="category h5">${category}</span>
                            </div>
                            <!-- Product price-->
                            <span class="price">${price}</span>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto" href="#"
                            >Add to cart</a
                            >
                        </div>
                    </div>
                </div>
            </div>`

    productsContainer.innerHTML += template;

}


main();






