// @ts-check

import base from "./base";

/**
 * Vue.js@3.x + TypeScript の Recommended ESLint ルール
 * - 追加ルール1: Return Typesの明示を必須に
 *   - ref: https://typescript-eslint.io/rules/explicit-function-return-type/
 * - 追加ルール2: NODE_ENV に合わせて 'no-console' 設定を可変
 * - 追加ルール3: NODE_ENV に合わせて 'no-debugger' 設定を可変
 *
 * @type {import('eslint').ESLint.ConfigData}
 */

module.exports = {
  extends: [base, "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
  overrides: [
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    {
      files: ["*.ts", "*.js", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
};
