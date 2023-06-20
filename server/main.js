const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 3000; //Save the port number where your server will be listening
const path = require("path");

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "../client/main.html");
  res.sendFile(filePath);
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
