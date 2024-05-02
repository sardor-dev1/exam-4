const API_URL = "https://fakestoreapi.com";

const productsCards = document.querySelector(".products");
const productMoreBtn = document.querySelector(".products__more--btn");
const loading = document.querySelector(".loading");
console.log(loading);

document.addEventListener("DOMContentLoaded", () => {
  loadProductData(API_URL);
});

let limitCount = 8;
let count = 1;

async function loadProductData(api) {
  productMoreBtn.setAttribute("disabled", true);
  productMoreBtn.textContent = "Loading...";
  let reponse = await fetch(`${api}/products?limit=${limitCount * count}`);
  reponse
    .json()
    .then((res) => renderProducts(res))
    .catch((err) => console.log(err))
    .finally(() => {
      productMoreBtn.removeAttribute("disabled");
      productMoreBtn.textContent = "View All Products";
      loading.style.display = "none";
    });
}

productMoreBtn.addEventListener("click", () => {
  count++;
  loadProductData(API_URL);
});


function renderProducts(data) {
  let cards = "";

  data.forEach((product) => {
    cards += `
        <div class="product__card">
            <div class="product__card__image">
                <i class="fa-regular fa-heart product__card__image__like"></i>
                <img src=${product.image} alt="">
                <button class="add-to-card product__card__image__btn" data-id=${product.id}>Add To Cart</button>
            </div>
            <div class="product__card__info">
              <h3 class="product__card__info__title">${product.category}</h3>
              <p class="product__card__info__text">${product.price}$ (95)</p>
            </div>
          </div>
        `;
  });
  productsCards.innerHTML = cards;
}

productsCards.addEventListener('click', (e)=> {
  if (e.target.classList.contains('add-to-card')) {
    let id = e.target.dataset.id;
    window.open(`./pages/product.html?id=${id}`, "_self");
  }
})

function loadCard(count) {
  let loadingCards = "";
  for (let i = 0; i < count; i++) {
    loadingCards += `
          <div class="loading__card">
            <div class="loading__ca
            rd__img bg__animation"></div>
            <div class="loading__card__info bg__animation"></div>
          </div>
    `;
  }
  loading.innerHTML = loadingCards;
}
loadCard(8);
