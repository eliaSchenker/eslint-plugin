/* eslint-disable @stylistic/quote-props */
// disabled in this file for the sake of consistency

/**
 * Configurations for built-in eslint rules
 * See https://eslint.org/docs/latest/rules/
 */
export default [
  {
    rules: {
      'no-console': 'off',
      // === instead of ==
      'eqeqeq': 'error',
      // foo.bar instead of foo['bar']
      'dot-notation': 'error',
      // avoid condition ? true : false
      'no-unneeded-ternary': 'error',
      'no-unused-vars': 'error',
      'curly': ['error', 'all'],
    },
  },
];
