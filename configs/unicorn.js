import unicorn from 'eslint-plugin-unicorn';

// https://github.com/sindresorhus/eslint-plugin-unicorn
export default [
  unicorn.configs.recommended,
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/empty-brace-spaces': 'off',
    },
  },
];
