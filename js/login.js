const API_URL = "https://fakestoreapi.com";

const username = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".login__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let product = {
        username: username.value,
        password: password.value,
    };
    logIn(product);
});

async function logIn(product) {
    console.log(product);
    await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Malumot hato kiritildi");
            }
            return response.json();
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem("x-auth-token", res.token);
            window.open("/pages/admin.html", "_self");
        })
        .catch((error) => alert(error.message));
}