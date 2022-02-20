const port = 5555;
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
// console.log(process.env.foo);
// console.log(process.env.VUE_APP_DONG);
module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  devServer: {
    port,
  },

  configureWebpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src/');
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '钉钉应用';
      return args;
    });
    const svgRule = config.module.rule('svg'); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/icons'));
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
};
