// server.js
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
// Without express
const { createServer } = require("http");

const app = next({ dev });
const handler = routes.getRequestHandler(app);
app.prepare().then(() => {
  createServer(handler).listen(port);
});
