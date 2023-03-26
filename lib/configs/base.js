module.exports = {
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
