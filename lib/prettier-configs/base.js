// @ts-check

/**
 * Base Prettier ルール
 * - ref: https://prettier.io/docs/en/options.html
 *
 * @type {import("prettier").Options}
 */
const basePrettier = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  useTabs: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  endOfline: "lf",
  arrowParens: "always",
  vueIndentScriptAndStyle: false,
};

export default basePrettier;
