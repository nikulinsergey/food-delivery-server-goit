const products = require("./products/products");
const signup = require("./signup/signup");

module.exports = {
  get: { "/products": products.get },
  post: { "/signup": signup.create }
};
