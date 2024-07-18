# nuxt-eslint-plugin
Plugin to use with nuxt/vue/typescript.
Contains a variety of recommended rules from the plugins:
- @stylistic/eslint-plugin
- eslint-plugin-unicorn
- eslint-plugin-vue
as well as some custom rules.

## Setup

Install the plugin using yarn, run
```bash
yarn add git+ssh://git@github.com/eliaSchenker/nuxt-eslint-plugin.git#1.0.0
```

Add config `base` to eslint config
```js
// eslint.config.mjs
import eslintPlugin from 'nuxt-eslint-plugin';

import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true
  }
}).prepend(eslintPlugin.configs['flat/base']);
```
