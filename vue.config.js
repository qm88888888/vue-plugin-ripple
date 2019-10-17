const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    extract: false,
    loaderOptions: {
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('~', path.resolve('packages'))
      .set('types', path.resolve('types'));
  },
}
