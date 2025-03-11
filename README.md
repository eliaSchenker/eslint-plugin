# eslint-plugin

Custom eslint plugin I use for my personal projects.

Includes the following plugins:
- @stylistic/eslint-plugin
- eslint-plugin-unicorn
- eslint-plugin-vue
- eslint-plugin-tailwindcss
- typescript-eslint

The plugins' recommended rulesets are extended with 
opinionated additional configurations.

## Example Setup: Nuxt

Install the plugin using yarn, run
```bash
yarn add @elia-schenker/eslint-plugin
```

Add config `flat/base` to eslint config
```ts
// eslint.config.mjs
import eslintPlugin from '@elia-schenker/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(...eslintPlugin.configs['flat/base']);
```
