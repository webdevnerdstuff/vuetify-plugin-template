import { describe, it, expect } from 'vitest';
import {
	useContainerClasses
} from '../classes';


describe('Classes Composable', () => {

	describe('useContainerClasses', () => {
		it('should return class object', () => {
			const classes = useContainerClasses({
				isOption: true,
			});

			expect(classes).toMatchSnapshot();
		});
	});
});
