module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'no-empty': 0,
    'padded-blocks': 0,
    'no-plusplus': 0,
    'prefer-const': 0,
  },
};
