const CracoLinariaPlugin = require('craco-linaria');

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
  ],
};
