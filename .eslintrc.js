const types = {
  OFF: "off",
  ON: "on",
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": types.OFF,
    "multiline-ternary": types.OFF,
    "no-unused-vars": types.OFF,
    "react/display-name": types.OFF,
    "react/jsx-key": types.OFF,
    "no-return-assign": types.OFF,
    "no-unused-expressions": types.OFF,
    "space-before-function-paren": types.OFF,
  },
}
