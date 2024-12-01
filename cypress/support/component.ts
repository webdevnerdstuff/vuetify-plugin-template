import './commands';
import AppTemplate from '../templates/App.vue';
import vuetify from "../../src/plugins/vuetify";
import { h } from "vue";
import { mount } from 'cypress/vue';
import VPluginTemplate from '../../src/plugin/VPluginTemplate.vue';
import type { Component } from 'vue';
import "cypress-real-events";
import { pluginOptionsInjectionKey } from '../../src/plugin/data/globals';


Cypress.Commands.add('mount', (component: Component, options: any = {}) => {
	// Ensure global settings are defined
	options.global = options.global || {};
	options.global.stubs = options.global.stubs || {};
	options.global.stubs['transition'] = false;
	options.global.components = options.global.components || {};
	options.global.plugins = options.global.plugins || [vuetify];

	// Process slots to ensure they are functions
	const slots = options.slots
		? Object.fromEntries(
			Object.entries(options.slots).map(([key, value]) => [
				key,
				// Convert strings or other non-function values into functions
				typeof value === 'function'
					? value
					: () => (typeof value === 'string' ? h('div', value) : h(value as any)),
			])
		)
		: {};

	// Mount AppTemplate as the root and render `component` inside it
	return mount(AppTemplate, {
		...options,
		slots: {
			// Render the main component in the default slot of AppTemplate
			default: () => h(component, options.props, slots),
		},
	}) as Cypress.Chainable;
});


Cypress.Commands.add('getDataCy', (name: string) => {
	return cy.get(`[data-cy="${name}"]`);
});

const globalOptions = {
};

interface MountComponentOptions {
	modelValue?: Record<string, any>;
	globalProps?: Record<string, any>;
	componentProps?: Record<string, any>;
}

Cypress.Commands.add('mountComponent', (options: MountComponentOptions = {}) => {
	const { modelValue = {}, globalProps = {}, componentProps = {} } = options;

	const localModelValue = { ...modelValue };

	return cy.then(() => {
		cy.mount(VPluginTemplate as any, {
			props: {
				modelValue: localModelValue,
				...componentProps,
			},
			global: { provide: { [pluginOptionsInjectionKey]: { ...globalOptions, ...globalProps }, }, },
		}).as('wrapper');
	});
});
