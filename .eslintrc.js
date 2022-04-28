// 来源：https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md#typescript-react
module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'react-hooks',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',  // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn'   // 检查 effect 的依赖
  },
};
