module.exports = function (paths) {
	return {
		module: {
			rules: [
				{
					include: paths,
					test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: '/css/fonts/',
					},
				}
			]
		}
	};
};