const eslintrc = require('./eslintrc.json')

module.exports = {
	...eslintrc,
	extends: [
		require.resolve('eslint-config-airbnb-base')
	]
}
