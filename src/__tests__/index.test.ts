import { describe, it, expect } from 'vitest';
import { createVPluginTemplate } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VPluginTemplate = createVPluginTemplate();

			expect('install' in VPluginTemplate).toBe(true);
		});
	});
});
