import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';


export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				importers: [],
			},
		},
	},
	plugins: [
		AutoImport({
			dts: false,
			imports: [
				'vue',
				{
					vue: ['CSSProperties'],
					vuetify: ['useTheme']
				}
			],
			vueTemplate: true,
		}),
		vue({
			template: { transformAssetUrls }
		}),
		vuetify({
			autoImport: true,
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@components': resolve(__dirname, './src/plugin/components/'),
			'@composables': resolve(__dirname, './src/plugin/composables/'),
			'@cypress': resolve(__dirname, './cypress'),
			'@data': resolve(__dirname, './src/plugin/data/'),
			'@plugin': resolve(__dirname, './src/plugin'),
			'@root': resolve(__dirname, '.'),
			'@slots': resolve(__dirname, './src/plugin/slots/'),
			'@types': resolve(__dirname, './src/plugin/types/'),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		host: '127.0.0.1',
		port: 3001,
		hmr: {
			protocol: 'ws',
		},
		open: false,
	},
});
