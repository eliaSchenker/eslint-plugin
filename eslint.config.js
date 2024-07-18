import pluginJs from '@eslint/js';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';

export default [
  pluginJs.configs.recommended,
  eslintPlugin.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single']
    }
  }
];