import type { ESLint, Linter } from 'eslint';

declare const eslintPlugin: ESLint.Plugin & {
  configs: {
    'flat/base': Linter.Config
  }
};

export = eslintPlugin;
