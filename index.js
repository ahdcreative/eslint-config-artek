module.exports = {
    extends: 'airbnb',
    plugins: ['@typescript-eslint', 'react-hooks'],
    // Override di AirBnB
    rules: {
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'class-methods-use-this': 'off',
        'curly': ['error', 'multi-line'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': ['error', 4],
        'no-restricted-syntax': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'strict': ['error', 'global'],
        // Literali
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'object-shorthand': ['error'],
        'no-case-declarations': 'off',
        // Perché.. si
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-continue': 'off',
        'radix': 'off',
        // Evitiamo i conflitti di eslint-typescript
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
        }],
        'no-use-before-define': 'off',
        'react/jsx-indent-props': 'off',
        // Non rilevante al momento
        'react/no-unused-state': 'off',
        // Inutili
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',
        // React
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'on|handle',
            eventHandlerPropPrefix: 'on',
            checkLocalVariables: true,
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // Non necessari con React 17+
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'no-undef-init': 'off',
        'max-len': ['error', { code: 192 }],
    },
};