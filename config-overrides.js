/* config-overrides.js */
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less-modules');

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	config = injectBabelPlugin(
		['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
		config,
	);
	config = rewireLess(config, env);
	config = rewireLess.withLoaderOptions({})(config, env);
	return config;
}
