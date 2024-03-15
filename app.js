const http = require("http");

//Route

const server = http.createServer((req, res) => {
  console.log("The request is End");
  res.end("Hello From the Server");
});

server.listen(5000, () => {
  console.log("Server is running is port :5000");
});
