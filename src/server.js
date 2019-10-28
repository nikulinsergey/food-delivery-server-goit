const http = require("http");
const router = require("./routes/router");

const startServer = port => {
  const server = http.createServer((request, response) => {
    if (request.method === "GET") {
      router.get[request.url](request, response);
    }
    if (request.method === "POST") {
      router.post[request.url](request, response);
    }
  });
  server.listen(port);
};

module.exports = startServer;
