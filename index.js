module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  plugins: [
    'lodash',
  ],
  extends: [
    'airbnb',
    'plugin:lodash/canonical',
    'prettier',
  ],
  globals: {
    moment: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // lawnstarter common rules
    camelcase: [
      'off',
      'always',
    ],
    'import/prefer-default-export': [
      'off',
      'always',
    ],
    'lodash/prefer-constant': [
      'off',
      'always',
    ],
    'lodash/identity-shorthand': [
      'warn',
      'always',
    ],
    'lodash/matches-prop-shorthand': [
      'warn',
      'always',
    ],
    'lodash/matches-shorthand': [
      'warn',
      'always',
    ],
    'lodash/prop-shorthand': [
      'warn',
      'always',
    ],
    curly: [
      'error',
      'all',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // react-specific rules
    'no-use-before-define': 'off',
    'class-methods-use-this': 'warn',
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': [
      'warn',
      {
        ignorePureComponents: true,
      },
    ],
  },
};
