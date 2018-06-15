const routes = (module.exports = require("next-routes")());

routes
  .add("/project/:id/members", "/projectMembers")
  .add("/project/:id/dimensions", "/projectDimensions");
