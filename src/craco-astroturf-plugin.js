const {
  getLoader,
  loaderByName,
  throwUnexpectedConfigError,
} = require("@craco/craco");

module.exports = {
  overrideWebpackConfig,
};

function overrideWebpackConfig({ context, pluginOptions, webpackConfig }) {
  const throwError = (message, githubIssueQuery) =>
    throwUnexpectedConfigError({
      packageName: "craco-astroturf",
      message,
      githubIssueQuery,
    });

  if (!webpackConfig.module) {
    throwError(
      `Can't find 'module' key in the ${context.env} webpack config!`,
      "webpack+module"
    );
  }

  const { isFound, match: babelLoaderMatch } = getLoader(
    webpackConfig,
    loaderByName("babel-loader")
  );

  if (!isFound) {
    throwError(
      `Can't find babel-loader in the ${context.env} webpack config!`,
      "webpack+babel-loader"
    );
  }

  const oneOfRules = webpackConfig.module.rules.find((rule) => rule.oneOf);
  if (!oneOfRules) {
    throwError(
      `Can't find 'oneOf' rules under module.rules in the ${context.env} webpack config!`,
      "webpack+rules+oneOf"
    );
  }

  oneOfRules.oneOf[1] = transformBabelLoader(
    babelLoaderMatch.loader,
    pluginOptions
  );

  return webpackConfig;
}

function transformBabelLoader(loader, pluginOptions) {
  const options = loader.options || {};
  const presets = options.presets || [];
  options.presets = presets;

  return {
    test: loader.test,
    include: loader.include,
    rules: [
      {
        loader: loader.loader,
        options: {
          ...options,
          presets: presets.concat("linaria/babel"),
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: "astroturf/loader",
            options: { extension: ".module.scss" },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  };
}
