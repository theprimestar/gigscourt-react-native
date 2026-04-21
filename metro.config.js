const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// This is the key addition: it explicitly tells Metro how to treat certain asset files
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;
