const eslintrc = require('./eslintrc.json')

module.exports = {
	...eslintrc,
	extends: [
		'eslint-config-airbnb-base'
	].map(require.resolve)
}
