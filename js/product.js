const productCard = document.querySelector(".product__card");

let API_URL = "https://fakestoreapi.com";

async function fetchData(api) {
    let param = new URLSearchParams(window.location.search)
    let id = param.get("id")
    const data = await fetch(`${api}/products/${id}`)
    data
    .json()
    .then((res) => mapDataProd(res))
    .catch((err) => console.log(err))
}

fetchData(API_URL)

function mapDataProd(product) {
  productCard.innerHTML = `
          <div class="products__card product__wrap">
                <div class="product__card__img">
                    <img src=${product.image} alt="">
                </div>
                <div class="product__card__info">
                    <h1 class="product__card__info__title">${product.title}</h1>
                    <div class="product__card__info__stars">
                        <img src="../images/product-card/Four Star.svg" alt="">
                        <p class="product__card__info__stars__reviews">(150 Reviews) |</p>
                        <p class="product__card__info__stars__stock">In Stock</p>
                    </div>
                    <p class="product__card__info__price">${product.price}$</p>
                    <p class="product__card__info__desc">${product.description}</p>
                    <div class="product__card__info__color">
                        <p>Colors</p>
                        <img src="../images/product-card/Colour Chnage.svg" alt="">
                    </div>
                    <div class="product__card__info__size">
                        <p>Size:</p>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <div class="counter">
                        <div class="number__counter">
                            <div class="counter__btns">
                                <button onclick="add()">
                                    <img src="../images/product-card/counter/plus.png" alt="" />
                                </button>
                                <h1 class="firsNum">0</h1>
                                <button onclick="Delete()">
                                    <img src="../images/product-card/counter/minus.png" alt="" />
                                </button>
                                <button class="number__counter__buy-now" onclick="reneme()">
                                    Buy Now
                                </button>
                                <button>
                                    <img src="../images/product-card/counter/Vector (2).svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  `;
}

