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
      'unicorn/prefer-tenary': 'off',
    },
  },
];
