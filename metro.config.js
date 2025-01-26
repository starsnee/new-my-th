// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // 1) Point to the SVG transformer so Metro knows how to bundle .svg files
  config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

  // 2) Remove "svg" from assetExts, add it to sourceExts
  const { assetExts, sourceExts } = config.resolver;
  config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
  config.resolver.sourceExts = [...sourceExts, 'svg'];

  return config;
})();
