import { defineConfig } from 'cypress';
import customViteConfig from './vite.cypress.config';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			config.env = {
				...process.env,
				...config.env,
			};
			return config;
		},
		specPattern: './src/**/*.spec.cy.{js,jsx,ts,tsx}',
	},

	component: {
		devServer: {
			bundler: 'vite',
			framework: 'vue',
			viteConfig: customViteConfig,
		},
		specPattern: './src/**/*.cy.{js,jsx,ts,tsx}',
		viewportHeight: 800,
		viewportWidth: 1920,
	},

	numTestsKeptInMemory: 0,
});
