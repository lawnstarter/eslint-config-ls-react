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
    'max-len': [
      'off',
      'always',
    ],
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
    'arrow-body-style': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'always',
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
    'react/jsx-indent': [
      'error',
      'space' | 4, // eslint-disable-line no-bitwise
    ],
    'react/jsx-indent-props': [
      'error',
      'space' | 4, // eslint-disable-line no-bitwise
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children:
        {
          when: 'always',
        },
      },
    ],
  },
};
