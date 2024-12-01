import type {
	App,
	CSSProperties,
} from 'vue';
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


declare global {
	export interface PluginOptions extends Pick<Props,
		'foo'
	> {
	}

	export interface Settings extends Props, Pick<PluginOptions, 'foo'> {
	}
}


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

export interface UseDeepMerge {
	(
		target: Record<string, any>,
		sources: Record<string, any>,
	): Record<string, any>;
}

// ------------------------- Classes //
export type ComputedClasses = Record<string, boolean>;

export interface UseContainerClasses {
	(
		options: {
			isOption?: boolean;
		}
	): ComputedClasses;
}


// ------------------------- Styles //
export interface UseContainerStyle {
	(
		options: {
			displayType?: string;
		}
	): CSSProperties;
}


// -------------------------------------------------- Plugin Component //
declare module 'vue' {
	interface ComponentCustomProperties { }

	interface GlobalComponents {
		VPluginTemplate: typeof VPluginTemplate;
	}
}

declare function createVPluginTemplate(options?: PluginOptions): {
	install: (app: App) => void;
};

export { createVPluginTemplate };
