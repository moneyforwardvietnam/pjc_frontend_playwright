module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [`eslint:recommended`, `plugin:@typescript-eslint/recommended`],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  rules: {
    'no-undef': 2,
    indent: ['error', 2],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'prettier/prettier': [
      0,
      {
        endOfLine: 'auto',
      },
    ],
  },
}
