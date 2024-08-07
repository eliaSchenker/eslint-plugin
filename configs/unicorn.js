import unicorn from 'eslint-plugin-unicorn';

/**
 * Configurations for rules of the unicorn plugin
 * See https://github.com/sindresorhus/eslint-plugin-unicorn
 */
export default [
  unicorn.configs['flat/recommended'],
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
    },
  },
];
