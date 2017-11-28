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
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    camelcase: [
      0,
      'always',
    ],
    'function-paren-newline': [
      0,
      'always',
    ],
    'lodash/identity-shorthand': [
      1,
      'always',
    ],
    'lodash/matches-prop-shorthand': [
      1,
      'always',
    ],
    'lodash/matches-shorthand': [
      1,
      'always',
    ],
    'lodash/prop-shorthand': [
      1,
      'always',
    ],
    'max-len': [
      1,
      100,
      {
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    curly: [
      2,
      'all',
    ],
    'space-before-function-paren': [
      2,
      'never',
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    indent: [
      2,
      4,
      {
        MemberExpression: 0,
      },
    ],
    'comma-dangle': [
      2,
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
      },
    ],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
