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
			'@cypress': resolve(__dirname, './cypress'),
			'@root': resolve(__dirname, '.'),
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
