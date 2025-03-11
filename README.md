# eslint-plugin

Eslint plugin which contains some very opinionated rules that I use for my personal projects.

Includes the following plugins:
- @stylistic/eslint-plugin
- eslint-plugin-unicorn
- eslint-plugin-vue
- eslint-plugin-tailwindcss
- typescript-eslint

## Example Setup: Nuxt

Install the plugin using yarn, run
```bash
yarn add @elia-schenker/eslint-plugin
```

Add config `base` to eslint config
```js
// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs';
import nuxtEslintPlugin from 'nuxt-eslint-plugin';

export default withNuxt().
  prepend(...nuxtEslintPlugin.configs['flat/base']);
```
