module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
  },
};
