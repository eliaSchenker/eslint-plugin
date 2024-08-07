# nuxt-eslint-plugin
Plugin to use with nuxt/vue/typescript.
Contains a variety of recommended rules from the plugins:
- @stylistic/eslint-plugin
- eslint-plugin-unicorn
- eslint-plugin-vue
- eslint-plugin-tailwindcss
as well as some custom rules.

## Setup

Install the plugin using yarn, run
```bash
yarn add git+ssh://git@github.com/eliaSchenker/nuxt-eslint-plugin.git
```

Add config `base` to eslint config
```js
// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs';
import nuxtEslintPlugin from 'nuxt-eslint-plugin';

export default withNuxt().
  prepend(...nuxtEslintPlugin.configs['flat/base']);
```
