import tailwind from 'eslint-plugin-tailwindcss';

// https://github.com/francoismassart/eslint-plugin-tailwindcss
export default [
  tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    },
  },
];
