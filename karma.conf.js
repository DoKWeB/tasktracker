// Karma configuration
// Generated on Wed Mar 21 2018 18:01:47 GMT+0400 (Саратов (зима))

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			"build/js/common.js",
			"build/js/index.js",
			"src/**/*.spec.js"
		],
		preprocessors: {
			"src/**/*.spec.js": ['babel']
		},
		babelPreprocessor: {
			options: {
				presets: ['env']
			},
		},
		exclude: [],
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	})
};
