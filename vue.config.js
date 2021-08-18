module.exports = {
    css: {
        loaderOptions: { 
            sass: {
                // additionalData: `@import "./src/assets/_shared.scss";`
                additionalData: `@import "./src/styles/base/_normalize.scss";`,
                additionalData: `@import "./src/styles/base/_reset.scss";`,
                additionalData: `@import "./src/styles/base/_globals.scss";`,
                additionalData: `@import "./src/styles/layouts/_grids.scss";`,
                additionalData: `@import "./src/styles/constants/_colors.scss";`,
                // additionalData: `@import "./src/styles/constants/_typography.scss";`,
                additionalData: `@import "./src/styles/mixins/_flexbox.scss";`,
                additionalData: `@import "./src/styles/mixins/_text-style.scss";`,
              },
        },
    },
};