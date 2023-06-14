const MENU_ICON = document.querySelector(".hamburger-menu");
const NAVBAR = document.querySelector(".navbar");
MENU_ICON.addEventListener("click", function () {
  NAVBAR.classList.toggle("change");
});
const TICKER = document.getElementById("stockTicker");

function getStockDetails() {
  const stock = TICKER.value;

  if (stock.trim() == "") {
    alert("Please enter a ticker");
  }
}

const searchBtn = document.querySelector(".searchbtn");
searchBtn.addEventListener("click", getStockDetails);
