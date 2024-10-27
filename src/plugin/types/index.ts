
/* eslint-disable no-unused-vars */
import { CSSProperties } from 'vue';
import VPluginTemplate from '../VPluginTemplate.vue';
// import { ThemeInstance } from 'vuetify';
// import type {  } from 'vuetify/labs/components';

export * from '../index';


// -------------------------------------------------- Global //
declare global {
	interface KeyStringAny<T = any> {
		[key: string]: T;
	}
}


// -------------------------------------------------- Props //
export interface Props {
	foo?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PluginOptions extends Props { }

// -------------------------------------------------- Composables //
export interface UseComposableName {
	(
		options: {
			foo?: string;
		}
	): Props;
}

// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			unit?: string,
			value: string | number,
		}
	): string | void;
}

// ------------------------- Classes //
export interface UseContainerClasses {
	(
		options: {
			isOption?: boolean;
		}
	): object;
}


// ------------------------- Styles //
export interface UseContainerStyle {
	(
		options: {
			displayType?: string;
		}
	): CSSProperties;
}


declare module "vue" {
	// interface ComponentCustomProperties { }

	interface GlobalComponents {
		VPluginTemplate: typeof VPluginTemplate;
	}
}
