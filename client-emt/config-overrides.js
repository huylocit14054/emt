/* config-overrides.js */
const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const fetch = require('node-fetch');
const fs = require('fs');
const envOverride = require('./env.config');
const { API_URL } = require('./src/constants');

module.exports = function override(config, env) {
  config = rewireInlineImportGraphqlAst(config, env);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#00b5d0' },
  })(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = injectBabelPlugin(['transform-define', envOverride], config);
  return config;
};

// Fetch Union/Interface type for fragment matcher
fetch(`${API_URL}/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(type => type.possibleTypes !== null);
    result.data.__schema.types = filteredData;
    fs.writeFile('./src/fragmentTypes.json', JSON.stringify(result.data), err => {
      if (err) console.error('Error writing fragmentTypes file', err);
    });
  });
