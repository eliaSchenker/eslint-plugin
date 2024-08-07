import stylistic from '@stylistic/eslint-plugin';

/**
 * Configurations for rules of the stylistic plugin
 * See https://eslint.style/packages/default
 */
export default [
  stylistic.configs['recommended-flat'],
  {
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
      }],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'object'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'multiline'],
      '@stylistic/generator-star-spacing': ['error', 'before'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }],
      '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
      }],
      '@stylistic/line-comment-position': 'off',
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-around-comment': ['error', {
        beforeBlockComment: true,
      }],
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/max-len': ['warn', {
        code: 150,
      }],
      '@stylistic/max-statements-per-line': ['warn', {
        max: 2,
      }],
      '@stylistic/multiline-comment-style': 'off',
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': ['error', 'always'],
      '@stylistic/newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 3,
      }],
      '@stylistic/no-confusing-arrow': 'warn',
      '@stylistic/no-extra-parens': ['error', 'all'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'warn',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['warn', {
        max: 2,
      }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      // Redundant because of 'all' with the curly rull
      '@stylistic/nonblock-statement-body-position': 'off',
      '@stylistic/object-curly-newline': ['error', {
        minProperties: 4,
        consistent: true,
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/one-var-declaration-per-line': 'off',
      '@stylistic/operator-linebreak': 'error',
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/padding-line-between-statements': 'off',
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false,
      }],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/switch-colon-spacing': ['error', {
        after: true,
        before: false,
      }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/wrap-iife': ['error', 'outside'],
      '@stylistic/wrap-regex': 'off',
      '@stylistic/yield-star-spacing': ['error', {
        before: false,
        after: true,
      }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      }],
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
      }],
    },
  },
];
