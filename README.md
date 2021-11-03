# eslint-config-wnderlvst

## Installation

```
# Install `eslint-config-wnderlvst`:
$ yarn add -D eslint-config-wnderlvst
```

## Usage

Once you installed `eslint-config-wnderlvst`, you can use it by specifying `wnderlvst` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: ['wnderlvst', 'plugin:react/recommended'],
  settings: {
    react: {
      version: '16.10.2'
    }
  },
  rules: {
    'react/prop-types': 0
  }
}

```

