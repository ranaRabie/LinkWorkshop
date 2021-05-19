module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/app.scss";
        `
      }
    }
  }
}