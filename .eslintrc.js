// const error = 2;
// const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import', 'jest', 'jsx-a11y', 'react', 'json', 'html'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
        jsxBracketSameLine: false,
      },
    ],
    'import/prefer-default-export': ignore,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: false,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.js'] }],
    'react/jsx-props-no-spreading': ['off', { custom: 'ignore' }],
  },
};
