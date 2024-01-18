import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VPluginTemplate from './VPluginTemplate.vue';


export const globalOptions = Symbol();

export function createVColorField(options: GlobalOptions = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VPluginTemplate', VPluginTemplate);
	};

	return {
		install,
	};
}

export default VPluginTemplate;

export {
	VPluginTemplate,
};
