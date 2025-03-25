export default [
  {
    ignores: ["node_modules/", "dist/", "build/", "coverage/"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        module: "readonly",
      },
    },
    rules: {
      "no-console": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "eqeqeq": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
];
