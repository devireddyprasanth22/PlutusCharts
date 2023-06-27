const tickerName = document.getElementById("tickerName");
const tickerPrice = document.getElementById("tickerPrice");
const tickerChange = document.getElementById("tickerChange");

let stockData = localStorage.getItem("stockData");
tickerName.innerHTML = JSON.parse(stockData)["Global Quote"]["01. symbol"];
tickerPrice.innerHTML = JSON.parse(stockData)["Global Quote"]["05. price"];
tickerChange.innerHTML =
  JSON.parse(stockData)["Global Quote"]["10. change percent"];
