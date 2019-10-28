module.exports = function(request) {
  return new Promise(resolve => {
    let body = [];
    request
      .on("error", err => console.log(err))
      .on("data", chunk => body.push(chunk))
      .on("end", () =>
        resolve((body = JSON.parse(Buffer.concat(body).toString())))
      );
  });
};
