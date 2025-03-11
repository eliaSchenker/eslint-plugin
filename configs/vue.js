// https://eslint.vuejs.org/rules/
export default [
  // Vue
  {
    rules: {
      // -------------------
      // Component structure
      // ---------------------

      // Blocks must be order <template>, <script> and then <style>
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      // Enforce multiline blocks
      'vue/block-tag-newline': ['error', {
        singleline: 'always',
        multiline: 'always',
      }],
      // Avoid empty component blocks
      'vue/no-empty-component-block': 'error',
      // The script block must be set with a language ts and
      // the style block with language scss
      'vue/block-lang': ['error', {
        script: {
          lang: 'ts',
        },
        style: {
          lang: 'scss',
        },
      }],
      // Only allow script setup
      'vue/component-api-style': ['error', ['script-setup']],
      // Only allow style scoped
      'vue/enforce-style-attribute': ['error', {
        allow: ['scoped'],
      }],

      // Component reference must be kebab-case
      // for example <base-component />
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: false,
        ignores: [],
      }],
      // Component definition must be kebab-case
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      // Allow single word component names
      'vue/multi-word-component-names': 'off',

      // -------------------
      // Template
      // ---------------------

      // Allow multiple root elements
      'vue/no-multiple-template-root': 'off',
      // Avoid v-text
      'vue/no-v-html': 'error',
      'vue/no-v-text': 'error',
      'vue/no-undef-components': 'off',
      // Enforce v-for="... in ..." instead of v-for="... of ..."
      'vue/v-for-delimiter-style': ['error', 'in'],
      // Avoid <div :class="'static-class'" />
      'vue/prefer-separate-static-class': 'error',
      // Prefer shortform of binding without v-bind
      'vue/no-useless-v-bind': 'error',
      // Prevent useless mustaches, e.g. {{ 'Lorem Ipsum' }}
      'vue/no-useless-mustaches': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      // html comment formatting
      'vue/html-comment-indent': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/html-comment-content-newline': 'error',

      // Base eslint rules for templates
      // Enforce === instead of ==
      'vue/eqeqeq': 'error',
      // foo.bar instead of foo['bar']
      'vue/dot-notation': 'error',
      'vue/dot-location': ['error', 'object'],
      'vue/func-call-spacing': ['error', 'never'],
      'vue/no-multiple-objects-in-class': 'warn',

      // -------------------
      // Script
      // ---------------------

      // Enforce typed props
      'vue/define-props-declaration': ['error', 'type-based'],
      // Enforce typed emits
      'vue/define-emits-declaration': ['error', 'type-based'],
      // Enforce defineProps before defineEmits
      'vue/define-macros-order': ['error', {
        order: ['defineProps', 'defineEmits'],
        defineExposeLast: true,
      }],
      // Enforce optional props for props that have a default value (withDefaults)
      'vue/no-required-prop-with-default': 'error',
      // Enforce that boolean props don't have a default
      'vue/no-boolean-default': 'error',

      // Prefer defineOptions over export default
      'vue/prefer-define-options': 'error',

      // Ref type must be given if it is not inferred
      'vue/require-typed-ref': 'error',

      // Enforce camelCase event names
      'vue/custom-event-name-casing': ['error', 'camelCase'],

      'vue/return-in-computed-property': 'off',

      'vue/no-unused-properties': 'warn',
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-unused-refs': 'warn',
    },
  },
];
