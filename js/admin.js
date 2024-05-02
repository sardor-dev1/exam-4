const logOut = document.querySelector(".logOut__admin")

let isLogin = localStorage.getItem("x-auth-token");

function checkUser(){
    if(!isLogin){
        window.location.replace("/pages/admin.html")
    }
} 

checkUser()

logOut.addEventListener("click", ()=> {
    localStorage.clear();
    window.open("./login.html", "_self")
});
