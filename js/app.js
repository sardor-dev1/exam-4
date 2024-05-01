const API_URL = "https://fakestoreapi.com";

const productsCards = document.querySelector(".products")

document.addEventListener("DOMContentLoaded", ()=> {
    loadProductData(API_URL)
})


async function loadProductData(api) {
    let reponse = await fetch(`${api}/products`)
    reponse
      .json()
      .then((res) => renderProducts(res))
      .catch((err) => console.log(err));
}

// loadProductData(API_URL)

function renderProducts(data) {
    let cards = ""

    data.forEach(product => {
        cards += `
        <div class="product__card">
            <img class="product__card__image" src=${product.image} alt="">
            <div class="product__card__info">
              <h3 class="product__card__info__title">${product.category}</h3>
              <p class="product__card__info__text">${product.price}</p>
            </div>
          </div>
        `;
    });
    productsCards.innerHTML = cards
}