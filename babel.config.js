module.exports = {
	presets: [
		['@vue/app', {
			polyfills: [
				'es6.promise',
				'es6.symbol'
			]
		}]
	]
};
//兼容es6