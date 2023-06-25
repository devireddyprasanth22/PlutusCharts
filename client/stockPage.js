const tickerName = document.getElementById("tickerName");
let stockData = localStorage.getItem("stockData");
tickerName.innerHTML = JSON.parse(stockData)["Global Quote"]["01. symbol"];
