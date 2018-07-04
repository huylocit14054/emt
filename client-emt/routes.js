const routes = (module.exports = require('next-routes')());

routes
  .add('/project/:id/members', '/projectMembers')
  .add('/me/profile', '/profile')
  .add('/project/:id/dimensions', '/projectDimensions')
  .add('/project/:id/assignments', '/projectAssignments')
  .add('/project/:id/rules', '/projectRules')
  .add('/project/:id/utm_builder', '/projectUTMBuilder')
  .add('/project/:id/utm_history', '/projectUTMHistory')
  .add('/project/:id/utm_analysis', '/projectUTMAnalysis');
