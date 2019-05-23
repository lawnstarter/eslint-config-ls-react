module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  plugins: ['lodash'],
  extends: ['airbnb', 'plugin:lodash/canonical', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // lawnstarter common rules
    camelcase: ['off', 'always'],
    // TODO: Change this back to warn
    'import/no-cycle': ['disable', 'always'],

    'import/prefer-default-export': ['off', 'always'],
    'lodash/prefer-constant': ['off', 'always'],
    'lodash/identity-shorthand': ['warn', 'always'],
    'lodash/matches-prop-shorthand': ['warn', 'always'],
    'lodash/matches-shorthand': ['warn', 'always'],
    'lodash/prop-shorthand': ['warn', 'always'],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    curly: ['error', 'all'],
    'space-before-function-paren': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': ['error', 'always'],
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
    'jsx-one-expression-per-line': ['off', 'always'],
    // TODO: Change this back to warn
    'react/destructuring-assignment': ['off', 'always'],
    'react/jsx-wrap-multilines': ['off', 'always'],
    'react/prefer-stateless-function': [
      'warn',
      {
        ignorePureComponents: true,
      },
    ],
    'react/jsx-indent': [
      'error',
      'space' | 4, // eslint-disable-line no-bitwise
    ],
    'react/jsx-indent-props': [
      'error',
      'space' | 4, // eslint-disable-line no-bitwise
    ],
    'lodash/prefer-lodash-method': [2, { ignoreObjects: ['lsNavigationService'] }],
  },
};
