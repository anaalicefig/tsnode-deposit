module.exports = {
  parser: '@typescript-eslit/parser',
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslit'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
}
