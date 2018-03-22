const path = require('path'); // позволяет работать с путями одинаково на всех платформах
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babel = require('./webpack/babel');
const html = require('./webpack/html');
const file = require('./webpack/file');

const PATHS = {
	src: path.join(__dirname, 'src'), // src path
	build: path.join(__dirname, 'build') // build path
};

const common = merge([
	{
		devtool: 'source-map',
		entry: {// точка входа приложения
			'index': PATHS.src + '/index.js' // страница index
		},
		output: { // точка выхода
			path: PATHS.build, // куда поместить бандл
			filename: 'js/[name].js' // имя бандла
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.src + '/index.html'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
				jquery: 'jquery'
			}),
		]
	},
	images(),
	babel(),
	file(),
	html()
]);

module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		]);
	}
};