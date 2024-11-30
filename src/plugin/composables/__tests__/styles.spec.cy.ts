
import { useContainerStyle } from '../styles';


describe('Styles Composable', () => {

	describe('useContainerStyle', () => {

		it('should return styles', () => {
			const data = useContainerStyle({
				displayType: 'flex',
			});

			expect(data).to.deep.equal({
				display: 'flex',
			});
		});
	});
});
