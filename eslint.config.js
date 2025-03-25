export default [
  {
    ignores: ["node_modules/"], 
  },
  {
    files: ["**/*.js"], 
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn",
      "no-var": "error",
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "object-curly-spacing": ["error", "always"],
      "space-before-function-paren": ["error", "always"]
    },
  },
];
