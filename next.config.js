const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/types" : "",
  assetPrefix: !debug ? "/types" : "",
};
