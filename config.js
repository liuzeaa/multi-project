module.exports = {
  aa: {
    publicPath:process.env.VUE_APP_AA_PUBLIC_PATH,
    pages: {
      index: {
        entry: `src/modules/aa/main.js`,
        filename: "index.html",
        template: "public/index.html"
      }
    },
    devServer:{
      port:81,
      host: '127.0.0.1',
      open: true,
    }
  },
  bb: {
    publicPath:process.env.VUE_APP_BB_PUBLIC_PATH,
    pages: {
      index: {
        entry: `src/modules/bb/main.js`,
        filename: "index.html",
        template: "public/index.html"
      }
    },
    devServer:{
      port:82,
      host: '127.0.0.1',
      open: true,
    }
  }
};