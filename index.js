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
    'function-paren-newline': [
      'off',
      'always',
    ],
    'import/prefer-default-export': [
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
    'max-len': [
      'warn',
      100,
      {
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
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
    indent: [
      'error',
      4,
      {
        MemberExpression: 'off',
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // react-specific rules
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-indent': [
      'error',
      'space' | 4, // eslint-disable-line
    ],
  },
};
