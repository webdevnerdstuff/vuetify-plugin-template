import VPluginTemplate from '../VPluginTemplate.vue';
import { pluginOptionsInjectionKey } from '../../plugin/data/globals';

const global = {
	provide: {
		[pluginOptionsInjectionKey]: {
		},
	},
};

describe('Plugin', () => {
	it('should mount component', () => {
		cy.mount(VPluginTemplate as any, {
			props: {
			},
			global,
		});

		cy.getDataCy('pluginTemplate').should('exist');
	});
});
