module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "semi": "off",
    "quotes": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": ["error", { multiline: { delimiter: 'none' } }],
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/no-explicit-any": 0,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
