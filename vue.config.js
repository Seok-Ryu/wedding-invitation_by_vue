module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Daliah and SeokRyu Wedding invitation";
          return args;
        })
  }
}
