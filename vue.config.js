const port = 5555;
const path = require('path');
// console.log(process.env.foo);
// console.log(process.env.VUE_APP_DONG);
module.exports = {
  publicPath: '/',
  devServer: {
    port,
  },
  configureWebpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src/');
  },
};
