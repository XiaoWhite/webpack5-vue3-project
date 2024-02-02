module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier'], // prettier 一定要放在数组最后的位置
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'], // 对应 eslint-plugin-vue 和 eslint-plugin-prettier
  rules: {
    'prettier/prettier': [
      'warn',
      {
        'endOfLine': 'auto',
      },
    ],
    'vue/multi-word-component-names': 'off', // 组件名字必须为多个单词--关闭
    'arrow-body-style': 'off', // 箭头函数后面的大括号检查
    'prefer-arrow-callback': 'off', // 回调函数优先使用剪头函数
    'no-unused-vars': 'off', // 未使用变量--关闭
  },
};
