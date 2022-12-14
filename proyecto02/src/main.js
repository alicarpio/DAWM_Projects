import MakeupApiService from './infraestructure/MakeupApiService.js'

const productsContainer = document.getElementById('products-container')
const searchInput = document.getElementById('search-input')
const searchIcon = document.getElementById('search-icon')

const loader = document.querySelector('#loading')
const sectionMakeupProduct = document.querySelector('#makeupProducts')

const makeupService = new MakeupApiService()

function displayLoading() {
  loader.classList.add('display')
  setTimeout(() => {
    loader.classList.remove('display')
  }, 20000)
}

function hideLoading() {
  loader.classList.remove('display')
  loader.style.display = 'none'
  sectionMakeupProduct.style.display = 'block'
}

displayLoading()
const makeupsInfo = await makeupService.getAllProducts()
hideLoading()

const main = async () => {
  ;[...makeupsInfo.values()].map((product) => {
    productsContainer.innerHTML += createProductCard(product)
  })

  searchIcon.addEventListener('click', (e) => {
    addProductsByName(e)
  })

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addProductsByName(e)
    }
  })
}

async function addProductsByName(event) {
  event.preventDefault()
  const name = document.getElementById('search-input').value
  const productsByName = await makeupService.findbyName(name)
  productsContainer.innerHTML = ''
  productsByName
    .map((product) => createProductCard(product))
    .forEach((productCard) => (productsContainer.innerHTML += productCard))
}

/**
 * Given a product rating, generate the corresponding series
 * of stars. For example:
 * ```
 * 3.5 => [1, 1, 1, 0.5]
 * ```
 * @param {number} rating
 */
function* ratings(rating) {
  while (rating > 0) {
    yield rating >= 1 ? 'bi-star-fill' : 'bi-star-half'
    rating -= 1
  }
}

function createStarsForRating(rating) {
  return [...ratings(rating)]
    .map((cls) => `<div class='${cls}'></div>`)
    .join('')
}

function createProductCard(makeup) {
  const imageLink = makeup['image_link']
  const makeupName = makeup['name']
  const price = makeup['price']
  const brand = makeup['brand'].toString().toUpperCase()
  const category =
    makeup['category'].toString() === 'none'
      ? makeup['product_type'].toString()
      : makeup['category'].toString()
  const rating = makeup['rating'].rating
  const stars = createStarsForRating(rating == 0 ? Math.floor(Math.random() * 4 + 1) : rating)
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
                            <div class="d-flex justify-content-center small text-warning mb-2">
                            ${stars}
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
            </div>`
}

main()
