// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
            sass: {
            additionalData: `@import "./src/styles/Layout"`,
            additionalData: `@import "./src/styles/Base/_colors"`,
            additionalData: `@import "./src/styles/Base/normalize"`,
            additionalData: `@import "./src/styles/Base/reset"`,
            },
       }
    }
}