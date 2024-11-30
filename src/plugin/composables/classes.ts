import type {
	UseContainerClasses,
} from '../types';
import { componentName } from '../data/globals';


// ------------------------------------------------ Component Container //
export const useContainerClasses: UseContainerClasses = (options) => {
	const { isOption } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--container`]: true,
		[`${componentName}--container-option`]: isOption ?? false,
	};
};
