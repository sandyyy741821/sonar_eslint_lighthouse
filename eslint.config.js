export default [
  {
    ignores: ["node_modules/", "dist/"], 
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", 
      globals: {
        console: "readonly",
      },
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
