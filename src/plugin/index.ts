import type { App, Plugin } from 'vue';
import type { PluginOptions } from './types';
import './styles/main.scss';
import VPluginTemplate from './VPluginTemplate.vue';

import { AllProps } from './utils/props';


const defaultOptions = AllProps;
export const globalOptions = Symbol();

export function createVPluginTemplate(options: PluginOptions = defaultOptions): Plugin {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VPluginTemplate', VPluginTemplate);
	};

	return {
		install,
	} as Plugin;
}

export default VPluginTemplate;

export {
	VPluginTemplate,
};
