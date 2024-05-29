/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
  },
};
