import './styles/main.scss';
import { useDeepMerge } from '@composables/helpers';
import type { App, Plugin } from 'vue';
import { globalOptions, pluginOptionsInjectionKey } from './data/globals';
import VPluginTemplate from './VPluginTemplate.vue';


export function createVPluginTemplate(options: PluginOptions = {}): Plugin {
	const install = (app: App) => {
		const pluginOptions: PluginOptions = useDeepMerge(options, globalOptions);

		app.provide(pluginOptionsInjectionKey, pluginOptions);

		// eslint-disable-next-line no-param-reassign
		app.config.idPrefix = 'vpt';

		app.component('VPluginTemplate', defineAsyncComponent(() => import('./VPluginTemplate.vue')));
	};

	return {
		install,
	} as Plugin;
}

export default VPluginTemplate;

export {
	VPluginTemplate,
};
