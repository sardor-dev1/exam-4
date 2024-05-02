let firsNum = document.querySelector(".firsNum");
let number = 0;

function add() {
  firsNum.innerHTML = number;
  number++;
}

function reneme() {
  number = 0;
  firsNum.innerHTML = number;
}

function Delete() {
  if (number > 0) {
    number--;
  }
  firsNum.innerHTML = number;
}

