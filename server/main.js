const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 3000; //Save the port number where your server will be listening
const path = require("path");

const request = require("request");
const API_KEY = "T16NZIWU8BZ72OZR"; // alpha vantage api key

// const url =
//   "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=" +
//   API_KEY;

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "../client/main.html");
  res.sendFile(filePath);
});

app.get("/server/main.js", (req, res) => {
  const filePath = path.resolve(__dirname, "../client/main.js");
  res.setHeader("Content-Type", "application/javascript"); // Set the correct MIME type for JavaScript files
  res.sendFile(filePath);
});

app.get("/api/stock", (req, res) => {
  const stockSymbol = req.query.symbol;

  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${API_KEY}`;

  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, response, data) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json({ error: "Something went wrong" });
      } else if (response.statusCode !== 200) {
        console.log("Status:", response.statusCode);
        res.status(500).json({ error: "Something went wrong" });
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
