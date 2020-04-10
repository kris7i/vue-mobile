module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  // 按需导入vant组件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
