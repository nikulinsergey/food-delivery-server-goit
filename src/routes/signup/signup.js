const fs = require("fs");
const path = require("path");
const bodyParser = require("./bodyParser");

const saveUser = username =>
  path.join(__dirname, "../../", "db", "users", `${username}.json`);

module.exports = {
  create: async (request, response) => {
    try {
      const body = await bodyParser(request);
      const userPath = saveUser(body.username);
      const user = JSON.stringify(body);
      fs.writeFile(userPath, user, err => {
        if (!!err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          return response.end(
            JSON.stringify({ message: "something went wrong" })
          );
        }
        const responseStatus = { status: "success", user: body };
        response.writeHead(200, { "Content-type": "application/json" });
        return response.end(JSON.stringify(responseStatus));
      });
    } catch (err) {
      console.error(err);
    }
  }
};
