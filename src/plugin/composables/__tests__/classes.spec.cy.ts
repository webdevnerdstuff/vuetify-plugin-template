import {
	useContainerClasses,
} from '../classes';
import { componentName } from '../../data/globals';

describe('Classes Composable', () => {

	describe('useContainerClasses', () => {

		it('should return class object', () => {
			const classes = useContainerClasses({
				isOption: true,
			});

			expect(classes).to.deep.equal({
				[`${componentName}`]: true,
				[`${componentName}--container`]: true,
				[`${componentName}--container-option`]: true,
			});
		});
	});
});
