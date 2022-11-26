import MakeupApiService from "./infraestructure/MakeupApiService.js";

const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");

const loader = document.querySelector("#loading");
const sectionMakeupProduct = document.querySelector("#makeupProducts");

const makeupService = new MakeupApiService();

function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 20000);
}

function hideLoading() {
  loader.classList.remove("display");
  loader.style.display = "none";
  sectionMakeupProduct.style.display = "block";
}

displayLoading();
const makeupsInfo = await makeupService.getAllProducts();
hideLoading();

const main = async () => {
  [...makeupsInfo.values()].map((product) => {
    productsContainer.innerHTML += createProductCard(product);
  });

  searchIcon.addEventListener("click", (e) => {
    addProductsByName(e);
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addProductsByName(e);
    }
  });

  updateCart();
};

async function addProductsByName(event) {
  event.preventDefault();
  const name = document.getElementById("search-input").value;
  const productsByName = await makeupService.findbyName(name);
  productsContainer.innerHTML = "";
  productsByName
    .map((product) => createProductCard(product))
    .forEach((productCard) => (productsContainer.innerHTML += productCard));
}

function updateCart() {
  let count;
  const addToCart = document.getElementsByClassName("add-to-cart");
  const countCart = document.getElementById("count-cart");
  addToCart.forEach((c) => {
    c.addEventListener("click", () => {
      count+=1;
      countCart.innerHTML = count;
    });
  });
}

function createProductCard(makeup) {
  const imageLink = makeup["image_link"];
  const makeupName = makeup["name"];
  const price = makeup["price"];
  const brand = makeup["brand"].toString().toUpperCase();
  const category =
    makeup["category"].toString() === "none"
      ? makeup["product_type"].toString()
      : makeup["category"].toString();
  return `<div class="col mb-5 product">
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
                            <a class="btn btn-outline-dark mt-auto add-to-cart" href="#"
                            >Add to cart</a
                            >
                        </div>
                    </div>
                </div>
            </div>`;
}

main();
