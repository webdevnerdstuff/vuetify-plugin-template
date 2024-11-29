import { componentName } from '@data/globals';
import type {
	UseContainerClasses,
} from '@plugin/types';


// ------------------------------------------------ Component Container //
export const useContainerClasses: UseContainerClasses = (options) => {
	const { isOption } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--container`]: true,
		[`${componentName}--container-option`]: isOption ?? false,
	};
};
