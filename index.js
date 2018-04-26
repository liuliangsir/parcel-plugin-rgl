module.exports = bundler => {
  // process handlebars files by .hbs and .handlebars extensions
  bundler.addAssetType('rgl', require.resolve('./lib/RegularAsset'));
  bundler.addAssetType('rglc', require.resolve('./lib/RegularAsset'));
};
