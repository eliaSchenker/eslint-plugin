import pluginJs from '@eslint/js';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import base from './configs/base.js';
import stylistic from './configs/stylistic.js';
import unicorn from './configs/unicorn.js';

export default [
  pluginJs.configs.recommended,
  eslintPlugin.configs['flat/recommended'],
  ...base,
  ...stylistic,
  ...unicorn,
];
