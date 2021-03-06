module.exports = {
	extends: [
		'airbnb-base'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'import/prefer-default-export': 'off',
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			}
		}],
		'max-len': 'off',
		'no-await-in-loop': 'off',
		'no-new': 'off',
		'no-param-reassign': ['error', { props: false }],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],
		'no-tabs': 'off',
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'object-curly-newline': 'off',
		'prefer-destructuring': 'off',
		semi: ['error', 'never']
	}
}
