const env = require('./env.config.js');

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          styles: './styles',
        },
        cwd: 'babelrc',
      },
    ],
    [
      'wrap-in-js',
      {
        extensions: ['css$', 'less$'],
      },
    ],
    'transform-decorators-legacy',
    [
      'import',
      {
        libraryName: 'antd',
        style: 'less',
      },
    ],
    ['transform-define', env],
  ],
  presets: ['next/babel'],
  compact: true,
  retainLines: true,
};
