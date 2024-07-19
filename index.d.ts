import type { ESLint, Linter } from "eslint";

declare const nuxtEslintPlugin: ESLint.Plugin & {
  configs: {
    'flat/base': Linter.Config
  }
}

export = nuxtEslintPlugin;