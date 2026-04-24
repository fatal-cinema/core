// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	endOfLine: 'auto',
	printWidth: 140,
	semi: false,
	bracketSpacing: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	importOrderParserPlugins: ['classProperties', 'decorators-legacy', 'typescript', 'jsx'],
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

	plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],

	overrides: [
		{
			files: '*.tsx',
			options: {
				parser: 'typescript',
			},
		},
	],
}
