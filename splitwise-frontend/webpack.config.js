const webpack = require('webpack');

module.exports = {
  // Other configurations...
  plugins: [
    new webpack.DefinePlugin({
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      // Add other flags if necessary
    }),
  ],
};
