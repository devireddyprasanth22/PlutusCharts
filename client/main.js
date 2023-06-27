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
  } else {
    fetch(`/api/stock?symbol=${stock}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("stockData", JSON.stringify(data));
        console.log("Setting data in local storage");
        window.location.href = "stockPage.html";
      })
      .catch((error) => console.error(error));
  }
}

const searchBtn = document.querySelector(".searchbtn");
searchBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  getStockDetails();
});
