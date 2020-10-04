module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "google",
  ],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
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
    "react-hooks/exhaustive-deps": "warn",
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
