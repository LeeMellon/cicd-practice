module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'prettier',
    'eslint-plugin-import',
    'react'
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
