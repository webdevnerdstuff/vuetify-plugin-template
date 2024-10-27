// eslint.config.js
import pluginVue from 'eslint-plugin-vue';
import typescript from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import typescriptParser from '@typescript-eslint/parser';



import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';


// extends: [
// 	'eslint:recommended',
// 	'plugin:vue/essential',
// 	'plugin:@typescript-eslint/recommended',
// 	'@vue/typescript/recommended',
// 	'prettier',
// 	'./.eslintrc-auto-import.json',
// ],

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},
	{
		files: ['**/*.{js,ts,vue}'],
		ignores: [
			'.eslintrc.js',
			'stylelint.config.js',
			'vite.build.config.mts',
			'vite.config.mts',
			'*.bk.vue',
			'*.spec.ts',
			'src/**/*.spec.ts',
			'src/**/*.test.ts',
		],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tseslint.parser,
				project: './tsconfig.json',
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		plugins: {
			pluginVue,
			'typescript-eslint': tseslint.plugin,
			prettier,
			import: importPlugin,
		},
		rules: {
			// ESLint core and TypeScript rules
			...eslint.configs.recommended.rules,
			...typescript.configs.recommended.rules,
			// ...typescript.configs['recommended-type-checked'].rules,

			// Custom rules
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'brace-style': ['error', 'stroustrup'],
			'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
			'func-names': ['error', 'never'],
			'function-paren-newline': 'off',
			'import/no-self-import': 'off',
			'import/no-extraneous-dependencies': 'off',
			'implicit-arrow-linebreak': ['warn', 'beside'],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-tabs': ['off', { allowIndentationTabs: true }],
			'linebreak-style': 'off',
			'max-len': 'off',
			'no-else-return': ['error', { allowElseIf: true }],
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'trace'] }],
			'no-const-assign': 'error',
			'no-debugger': 'off',
			'no-new': 'off',
			'no-undef': 'off',
			'no-unused-vars': 'warn',
			'no-use-before-define': 'off',
			'no-useless-escape': 'off',
			'no-param-reassign': [
				'error',
				{
					props: true,
					ignorePropertyModificationsFor: [
						'field',
						'model',
						'el',
						'item',
						'state',
						'Vue',
						'vue',
					],
				},
			],
			'no-underscore-dangle': [
				'error',
				{
					allow: ['_data'],
					allowAfterThis: true,
				},
			],
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'object-curly-newline': ['error', { ObjectPattern: { multiline: false } }],
			'operator-linebreak': ['error', 'after'],
			'prefer-destructuring': [
				'error',
				{
					array: false,
					object: false,
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'never',
					named: 'never',
					asyncArrow: 'always',
				},
			],

			// Vue-specific rules
			'vue/attributes-order': [
				'error',
				{
					alphabetical: true,
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
				},
			],
			'vue/html-closing-bracket-newline': 'off',
			'vue/html-indent': 'off',
			'vue/html-self-closing': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/no-multiple-template-root': 'off',
			'vue/no-template-shadow': 'off',
			'vue/no-v-for-template-key': 'off',
			'vue/no-v-html': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/sort-keys': [
				'error',
				'asc',
				{
					caseSensitive: true,
					ignoreChildrenOf: ['model', 'defineProps'],
					ignoreGrandchildrenOf: [
						'computed',
						'directives',
						'inject',
						'props',
						'watch',
						'defineProps',
					],
					minKeys: 2,
					natural: true,
				},
			],
			'vue/valid-template-root': 'off',
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true, // Always try to resolve types
					project: './tsconfig.json', // Specify the path to your tsconfig.json
				},
			},
		},
	}
);


export const foo = [
	{
		files: ['**/*.{js,ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptParser,
			parserOptions: {
				parser: typescriptParser,
				tsconfigRootDir: './', // Adjust this as necessary
				project: './tsconfig.json', // Path to your tsconfig file
			},
		},
		// plugins: {
		// 	vue,
		// 	'@typescript-eslint': typescript,
		// 	prettier,
		// 	import: importPlugin,
		// },
		rules: {
			// ESLint core and TypeScript rules
			...eslint.configs.recommended.rules,
			...typescript.configs.recommended.rules,
			...typescript.configs['recommended-type-checked'].rules,

			// Custom rules
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'brace-style': ['error', 'stroustrup'],
			'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
			'func-names': ['error', 'never'],
			'function-paren-newline': 'off',
			'import/no-self-import': 'off',
			'import/no-extraneous-dependencies': 'off',
			'implicit-arrow-linebreak': ['warn', 'beside'],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-tabs': ['off', { allowIndentationTabs: true }],
			'linebreak-style': 'off',
			'max-len': 'off',
			'no-else-return': ['error', { allowElseIf: true }],
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'trace'] }],
			'no-const-assign': 'error',
			'no-debugger': 'off',
			'no-new': 'off',
			'no-undef': 'off',
			'no-unused-vars': 'warn',
			'no-use-before-define': 'off',
			'no-useless-escape': 'off',
			'no-param-reassign': [
				'error',
				{
					props: true,
					ignorePropertyModificationsFor: [
						'field',
						'model',
						'el',
						'item',
						'state',
						'Vue',
						'vue',
					],
				},
			],
			'no-underscore-dangle': [
				'error',
				{
					allow: ['_data'],
					allowAfterThis: true,
				},
			],
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'object-curly-newline': ['error', { ObjectPattern: { multiline: false } }],
			'operator-linebreak': ['error', 'after'],
			'prefer-destructuring': [
				'error',
				{
					array: false,
					object: false,
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'never',
					named: 'never',
					asyncArrow: 'always',
				},
			],

			// Vue-specific rules
			'vue/attributes-order': [
				'error',
				{
					alphabetical: true,
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
				},
			],
			'vue/html-closing-bracket-newline': 'off',
			'vue/html-indent': 'off',
			'vue/html-self-closing': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/no-multiple-template-root': 'off',
			'vue/no-template-shadow': 'off',
			'vue/no-v-for-template-key': 'off',
			'vue/no-v-html': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/sort-keys': [
				'error',
				'asc',
				{
					caseSensitive: true,
					ignoreChildrenOf: ['model', 'defineProps'],
					ignoreGrandchildrenOf: [
						'computed',
						'directives',
						'inject',
						'props',
						'watch',
						'defineProps',
					],
					minKeys: 2,
					natural: true,
				},
			],
			'vue/valid-template-root': 'off',
		},
		settings: {
			'import/resolver': {},
		},
	},
	{
		// Jest-specific configuration for test files
		files: ['**/*.spec.{j,t}s?(x)'],
		env: {
			jest: true,
		},
	},
];
