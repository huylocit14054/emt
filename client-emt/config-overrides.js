/* config-overrides.js */
const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = rewireInlineImportGraphqlAst(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#00b5d0' },
  })(config, env);
  return config;
};
