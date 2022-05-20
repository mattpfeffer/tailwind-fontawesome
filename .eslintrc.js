module.exports = {
    root: true,
    extends: ['standard', 'prettier'],
    globals: {},
    env: {
        node: true,
        es2017: true,
        amd: true,
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            globalReturn: true,
        },
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    plugins: [],
    settings: {},
    rules: {
        'no-console': 'warn',
    },
};
