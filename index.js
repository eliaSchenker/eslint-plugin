import stylistic from '@stylistic/eslint-plugin';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import pluginVue from 'eslint-plugin-vue'
import fs from 'fs';

// TODO dynamic import + tests
import i18nFileKeyCasing from './rules/i18n/file-key-casing.js';
import i18nFileNoHtml from './rules/i18n/file-no-html.js';

const pkg = JSON.parse(fs.readFileSync(new URL('url').URL('./package.json', import.meta.url), 'utf8'));

// TODO split by general, template, setup script and style
export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {
    'flat/base': [
      // General
      {
        rules: {
          // === instead of ==
          'eqeqeq': 'error',
          // foo.bar instead of foo['bar']
          'dot-notation': 'error',
        }
      },
      // Stylistic
      stylistic.configs['recommended-flat'],
      {
        rules: {
          '@stylistic/dot-location': ['error', 'object'],
          '@stylistic/member-delimiter-style': ['error', {
            multiline: {
              delimiter: 'none',
              requireLast: true,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: true,
            },
          }],
          '@stylistic/indent': ['error', 2],
          '@stylistic/semi': ['error', 'always'],
        }
      },
      // Unicorn plugin
      eslintPluginUnicorn.configs['flat/recommended'],
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
      pluginVue.configs['flat/recommended'],
      // Vue
      {
        rules: {
          // Only allow script setup
          'vue/component-api-style': ['error', ['script-setup']],
          // Component reference must be kebab-case
          // for example <base-component />
          'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            registeredComponentsOnly: false,
            ignores: [],
          }],
          // Component definition must be kebab-case
          'vue/component-definition-name-casing': ['error', 'kebab-case'],
          // Blocks must be order <template>, <script> and then <style>
          'vue/block-order': ['error', {
            order: ['template', 'script', 'style'],
          }],
          // The script block must be set with a language ts and
          // the style block with language scss
          'vue/block-lang': ['error',
            {
              script: {
                lang: 'ts',
              },
              style: {
                lang: 'scss',
              },
            },
          ],
          // Enforce multiline blocks
          'vue/block-tag-newline': ['error', {
            'singleline': 'always',
            'multiline': 'always'
          }],
          // Avoid empty copmponent blocks
          'vue/no-empty-component-block': 'error',
          // Enforce typed props
          'vue/define-props-declaration': ['error', 'type-based'],
          // Enforce typed emits
          'vue/define-emits-declaration': ['error', 'type-based'],
          // Enforce defineProps before defineEmits
          'vue/define-macros-order': ['error', {
            'order': ['defineProps', 'defineEmits'],
            'defineExposeLast': false
          }],
          // Prefer defineOptions over export default
          'vue/prefer-define-options': 'error',
          // Enforce optional props for props that have a default value (withDefaults)
          'vue/no-required-prop-with-default': 'error',
          // Avoid v-text
          'vue/no-v-text': 'error',
          // Ref type must be given if it is not inferred
          'vue/require-typed-ref': 'error',
          // Enforce === instead of ==
          'vue/eqeqeq': 'error',
          // foo.bar instead of foo['bar']
          'vue/dot-notation': 'error',
          // Enforce v-for="... in ..." instead of v-for="... of ..."
          'vue/v-for-delimiter-style': ['error', 'in'],
          'vue/prefer-separate-static-class': 'error',
          'vue/no-useless-v-bind': 'error',
          'vue/no-useless-mustaches': 'error',
          'vue/no-duplicate-attr-inheritance': 'error',
          'vue/no-boolean-default': 'error',
          // html comment formatting
          'vue/html-comment-indent': 'error',
          'vue/html-comment-content-spacing': 'error',
          'vue/html-comment-content-newline': 'error',
          'vue/enforce-style-attribute': 'error',
          'vue/custom-event-name-casing': ['error', 'camelCase'],

          'vue/no-unused-emit-declarations': 'warn',
          'vue/no-unused-refs': 'warn',
          'vue/no-unused-properties': 'warn',
          'vue/no-undef-components': 'off',
          'vue/dot-location': ['error', 'object'],
          'vue/no-multiple-objects-in-class': 'warn',
        }
      }
    ]
  },
  // Custom rules
  rules: {
    'i18n-key-casing': i18nFileKeyCasing,
    'i18n-no-html': i18nFileNoHtml,
  }
};
