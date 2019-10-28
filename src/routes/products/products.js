const fs = require("fs");
const path = require("path");

const productsPath = path.join(
  __dirname,
  "../../",
  "db",
  "products",
  "all-products.json"
);

module.exports = {
  get: (request, response) => {
    fs.open(productsPath, "r", (err, fileDescriptor) => {
      err
        ? console.error(err)
        : fs.readFile(fileDescriptor, "utf-8", (err, data) => {
            err ? console.error(err) : null;
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(data);
          });
    });
  }
};
