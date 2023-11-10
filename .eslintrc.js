module.exports = {
    root: true,
    extends: ['standard', 'prettier'],
    globals: {},
    env: {
        node: true,
        es2018: true,
        amd: true,
        browser: true
    },
    parserOptions: {
        ecmaFeatures: {},
        ecmaVersion: 2018
    },
    plugins: [],
    settings: {},
    rules: {
        'no-console': 'warn',
        'no-protoype-builtins': 'off'
    }
};
