const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['@babel', 'react', 'jsx-a11y', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  globals: {
    React: true,
    Utils: true,
  },
  rules: {
    'no-restricted-exports': 0,
    'prettier/prettier': 2,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'react/default-props-match-prop-types': 0,
    'react/require-default-props': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
};
