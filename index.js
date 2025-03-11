import base from './configs/base.js';
import stylistic from './configs/stylistic.js';
import tailwind from './configs/tailwind.js';
import typescript from './configs/typescript.js';
import unicorn from './configs/unicorn.js';
import vue from './configs/vue.js';

export default {
  meta: {
    name: '@eliaSchenker/eslint-plugin',
    version: '1.0.1',
  },
  configs: {
    'flat/base': [
      ...base,
      ...stylistic,
      ...tailwind,
      ...typescript,
      ...unicorn,
      ...vue,
    ],
  },
};
