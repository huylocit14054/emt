const path = require("path");
const glob = require("glob");
const { API_URL } = require("./constants");
const withGraphql = require("next-plugin-graphql");
const fetch = require("node-fetch");
const fs = require("fs");

module.exports = withGraphql({
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|less)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,

              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
});

// Fetch Union/Interface type for fragment matcher
fetch(`${API_URL}/graphql`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
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
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;
    fs.writeFile("./fragmentTypes.json", JSON.stringify(result.data), err => {
      if (err) console.error("Error writing fragmentTypes file", err);
    });
  });
