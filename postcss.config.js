const pxtorem = require('postcss-pxtorem');
const pxtoremOptions = {
	rootValue: 20,
	replace: true,
	propList: ['*'],
	selectorBlackList: ['html'],
};

module.exports = {
	plugins: [require('autoprefixer'), pxtorem(pxtoremOptions)],
};
