const { defineConfig } = require("@vue/cli-service");
const path = require("path");
let projectName = process.env.PROJECT_NAME;

const config = require("./config");

module.exports = defineConfig({
  transpileDependencies:false,
  lintOnSave: false,
  productionSourceMap: false,
  ...config[projectName],
  chainWebpack: config => {
    config.resolve.alias
      .set("@aa", path.join(__dirname, "src/modules/aa"))
      .set("@bb", path.join(__dirname, "src/modules/bb"));
  },
  outputDir: "dist/" + projectName + "/",
  assetsDir: 'static',
  css: {
    sourceMap: false,
    loaderOptions: {
      css: {
        modules: {
          auto: () => true
        }
      }
    },
  },
});
