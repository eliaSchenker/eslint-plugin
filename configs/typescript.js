export default [
  {
    rules: {
      // Disabled because of incorrect detection in defineEmit
      '@typescript-eslint/unified-signatures': 'off',

      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
];
