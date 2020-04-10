// 拼接路径
const resolve = dir => require('path').join(__dirname, dir);

// 设置发布路径 '/':部署在根路径   './':部署在任意路径   '/app/':指定路径
let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/';

module.exports = {
  lintOnSave: false,
  publicPath: publicPath, // 和 publicPath 保持一致
  productionSourceMap: false, // 不输出 map 文件
  transpileDependencies: ['vuex-persist'],
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins
    .delete('prefetch')
    .delete('preload');
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
    .symlinks(true);
    // svg
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
    .include
    .add(resolve('src/assets/svg-icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end();
    // image exclude
    const imagesRule = config.module.rule('images');
    imagesRule
    .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
    .exclude
    .add(resolve('src/assets/svg-icons'))
    .end();
    // 重新设置 alias
    config.resolve.alias
    .set('@', resolve('src'))
    .set('@api', resolve('src/config/api'));
  }
};