"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoverProps = exports.getShadowProps = exports.getVariantProps = exports.getSizeProps = void 0;
const getSizeProps = (size) => {
    switch (size) {
        case 'small':
            return {
                fontSize: '12px',
                padding: '0.5rem 1rem',
            };
        case 'medium':
            return {
                fontSize: '15px',
                padding: '0.8rem 2rem',
            };
        case 'large':
            return {
                fontSize: '18px',
                padding: '1rem 2.5rem',
            };
    }
};
exports.getSizeProps = getSizeProps;
const getVariantProps = (variant) => {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: '#007bff',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'secondary':
            return {
                backgroundColor: '#d6cdcd',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'tertiary':
            return {
                backgroundColor: '#28a745',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'danger':
            return {
                backgroundColor: '#dc3545',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'success':
            return {
                backgroundColor: '#28a745',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'warning':
            return {
                backgroundColor: '#ffc107',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'info':
            return {
                backgroundColor: '#17a2b8',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'light':
            return {
                backgroundColor: '#f8f9fa',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'dark':
            return {
                backgroundColor: '#343a40',
                textColor: '#000',
                borderRadius: '3px',
            };
        case 'link':
            return {
                backgroundColor: 'transparent',
                textColor: '#007bff',
                borderRadius: '3px',
            };
        case null:
            return {};
    }
};
exports.getVariantProps = getVariantProps;
const getShadowProps = (variant) => {
    switch (variant) {
        case 'primary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'secondary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'tertiary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'danger':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'success':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'warning':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'info':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'light':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'dark':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case 'link':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            };
        case null:
            return {};
    }
};
exports.getShadowProps = getShadowProps;
const getHoverProps = (variant) => {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: '#0069d9',
            };
        case 'secondary':
            return {
                backgroundColor: '#c6c6c6',
            };
        case 'tertiary':
            return {
                backgroundColor: '#218838',
            };
        case 'danger':
            return {
                backgroundColor: '#c82333',
            };
        case 'success':
            return {
                backgroundColor: '#218838',
            };
        case 'warning':
            return {
                backgroundColor: '#e0a800',
            };
        case 'info':
            return {
                backgroundColor: '#138496',
            };
        case 'light':
            return {
                backgroundColor: '#e2e6ea',
            };
        case 'dark':
            return {
                backgroundColor: '#1d2124',
            };
        case 'link':
            return {
                backgroundColor: 'transparent',
            };
        case null:
            return {};
    }
};
exports.getHoverProps = getHoverProps;
//# sourceMappingURL=utils.js.map