// https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
}
