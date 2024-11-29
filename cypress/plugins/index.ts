const path = require('path');
const { startDevServer } = require('@cypress/vite-dev-server');

module.exports = (on, config) => {
	config.env.tsconfigPath = path.resolve(__dirname, '../../tsconfig.cypress.json'); // Adjust the path as needed
	return config;
};
