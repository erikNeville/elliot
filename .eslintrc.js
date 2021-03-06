module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",

    "import/named": "off",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", ["parent", "sibling", "index"]],
        pathGroups: [
          {
            pattern: "@app/**",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],

    eqeqeq: "error",

    "react/display-name": "off",
    "react/jsx-no-bind": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  env: {
    browser: true,
    es6: true,
  },
};
