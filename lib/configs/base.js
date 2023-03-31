// @ts-check

/**
 * Vue.js@3.x + TypeScript の Base ESLint ルール
 * - extends rules:
 *   - ref: https://typescript-eslint.io/linting/configs
 *   - ref: https://eslint.vuejs.org/user-guide/#usage
 * - 追加ルール1: unused imports
 *   - ref: https://github.com/sweepline/eslint-plugin-unused-imports
 *
 * @type {import('eslint').ESLint.ConfigData}
 */
const base = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    // https://github.com/sweepline/eslint-plugin-unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};

export default base;
