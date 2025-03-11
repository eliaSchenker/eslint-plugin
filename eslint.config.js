import pluginJs from '@eslint/js';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import stylistic from './configs/stylistic.js';
import unicorn from './configs/unicorn.js';
import base from './configs/base.js';
import typescript from './configs/typescript.js';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  eslintPlugin.configs['flat/recommended'],
  ...base,
  ...typescript,
  ...stylistic,
  ...unicorn,
  ...tseslint.configs.recommended,
];
