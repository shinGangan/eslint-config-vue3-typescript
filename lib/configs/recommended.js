const base = require("./base");

module.exports = {
  extends: [base, "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error": "warn",
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
