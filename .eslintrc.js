module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
    ],
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    globals: {
      moxios: true,
      mockStore: true,
      shallow: true
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
      },
      'ecmaVersion': 6,
      "sourceType": "module",
      'allowImportExportEverywhere': true  
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': ['off'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-one-expression-per-line': [0],
      'jsx-a11y/label-has-for': [0],
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      strict: 'off',
      'no-console': ['warn', { allow: ['info', 'error'] }],
      'no-empty': ['warn', { allowEmptyCatch: true } ],
      'arrow-parens': ['error', 'always'],
      'class-methods-use-this': ['off'],
      'import/no-named-as-default': ['off'],
      'camelcase' : ['off'],
      'react/no-string-refs': ['off'],
      'react/no-array-index-key': ['off'],
      'jsx-a11y/no-static-element-interactions': ['off'],
      'jsx-a11y/click-events-have-key-events': ['off'],
      'react/sort-comp': ['off'],
      'jsx-a11y/label-has-associated-control': [ 'error', { 'required': { 'some': [ 'nesting', 'id'  ]} }],
      'jsx-a11y/label-has-for': [ 'error', { 'required': { 'some': [ 'nesting', 'id'  ]} }]
    },
  };

