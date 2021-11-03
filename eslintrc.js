module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [ 'eslint:recommended', 'standard'],
  plugins: [ 'require-path-exists'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],

    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],

    'require-path-exists/notEmpty': 'error',
    'require-path-exists/tooManyArguments': 'error',
    'require-path-exists/exists': 'error',

    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features': 'off',
  },
}
