import type {
	UseConvertToUnit,
	UseDeepMerge,
} from '@/plugin/types';


/**
 * -------------------------------------------------- Converts a string to a number with a unit.
 */
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { unit = 'px', value } = options;

	if (value == null || value === '') {
		return undefined;
	}

	if (!+value) {
		return String(value);
	}

	return `${Number(value)}${unit}`;
};


/**
 * -------------------------------------------------- Deep merge objects.
 */
// Object Check //
function isObject(item: object): boolean {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

// Merge objects //
export const useDeepMerge: UseDeepMerge = (target, ...sources) => {
	if (!sources.length) {
		return target;
	}

	const source = sources.shift() as object[];

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			// @ts-ignore
			if (isObject(source[key])) {
				if (!target[key as keyof object]) {
					Object.assign(target, { [key]: {} });
				}

				// @ts-ignore
				useDeepMerge(target[key as keyof object], source[key]);
			}
			else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return useDeepMerge(target, ...sources);
};
