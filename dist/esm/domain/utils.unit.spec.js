/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { getHoverProps, getShadowProps, getSizeProps, getVariantProps, } from './utils';
describe('Utils', () => {
    it('get sizes props with small value', () => {
        const result = getSizeProps('small');
        expect(result).toEqual({
            fontSize: '12px',
            padding: '0.5rem 1rem',
        });
    });
    it('get variant props with primary value', () => {
        const result = getVariantProps('primary');
        expect(result).toEqual({
            backgroundColor: '#007bff',
            textColor: '#000',
            borderRadius: '3px',
        });
    });
    it('get shadow props with secondary value', () => {
        const result = getShadowProps('secondary');
        expect(result).toEqual({
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
        });
    });
    it('get hover props with primary value', () => {
        const result = getHoverProps('primary');
        expect(result).toEqual({
            backgroundColor: '#0069d9',
        });
    });
});
//# sourceMappingURL=utils.unit.spec.js.map