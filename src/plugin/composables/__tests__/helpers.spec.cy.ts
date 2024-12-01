import {
	useConvertToUnit,
	useDeepMerge,
} from '../helpers';

describe('Helpers Composable', () => {

	describe('useConvertToUnit', () => {

		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ value: '10' });
			expect(unit).to.equal('10px');
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ value: 10 });
			expect(unit).to.equal('10px');
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ unit: 'em', value: '10' });
			expect(unit).to.equal('10em');
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ unit: 'em', value: 10 });
			expect(unit).to.equal('10em');
		});
	});

	describe('useDeepMerge', () => {

		it('should deep merge objects', () => {
			const target = {
				foo: 'foo',
			};

			const source = {
				bar: 'bar',
			};

			const merge = useDeepMerge(target, source);

			expect(merge).to.deep.equal({
				foo: 'foo',
				bar: 'bar',
			});
		});
	});
});
