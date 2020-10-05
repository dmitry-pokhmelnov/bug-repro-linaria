const CracoLinariaPlugin = require("craco-linaria");
// const CracoAstroturfPlugin = require("./src/craco-astroturf-plugin");

module.exports = {
  eslint: {
    enable: true,
  },
  babel: {
    loaderOptions: {
      babelrc: true,
    },
  },
  plugins: [
    {
      plugin: CracoLinariaPlugin,
    },
    // {
    //   plugin: CracoAstroturfPlugin,
    // },
  ],
};
