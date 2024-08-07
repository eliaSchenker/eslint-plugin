import base from './configs/base.js';
import stylistic from './configs/stylistic.js';
import tailwind from './configs/tailwind.js';
import unicorn from './configs/unicorn.js';
import vue from './configs/vue.js';

export default {
  meta: {
    name: 'nuxt-eslint-plugin',
    version: '1.0.0',
  },
  configs: {
    'flat/base': [
      ...base,
      ...stylistic,
      ...tailwind,
      ...unicorn,
      ...vue,
    ],
  },
};
