module.exports = {
  env: {
    browser: true,
    es6: false,
    amd: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended"
],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-redux"
  ],
  rules: {
    "react-redux/connect-prefer-named-arguments": 2,
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "func-names": 0,
    "consistent-return": 0,
    "global-require": 0,
    "prefer-destructuring": 0,
    "strict": 0,
    "max-len": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],    
    "implicit-arrow-linebreak": "off",    
    "comma-dangle": "off",    
    "no-trailing-spaces": "off"  
  },
};
