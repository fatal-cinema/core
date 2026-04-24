// prettier.config.cjs
/** @type {import("prettier").Config} */
module.exports = {
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	endOfLine: 'auto',
	printWidth: 140,
	semi: false,
	bracketSpacing: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',

	importOrderTypeScriptVersion: '5.0.0',
	importOrderCaseSensitive: false,
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'',
		'^@core/(.*)$',
		'^@libs/(.*)$',
		'^@shared/(.*)$',
		'^@api/(.*)$',
		'^@/(.*)$',
		'',
		'^../(.*)$',
		'^./(.*)$',
	],

	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

	overrides: [
		{
			files: '*.tsx',
			options: {
				parser: 'typescript',
			},
		},
	],
}
