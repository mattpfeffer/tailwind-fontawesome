module.exports = {
    root: true,
    extends: ['standard', 'semistandard', 'prettier'],
    globals: {},
    env: {
        node: true,
        es6: true,
        amd: true,
        browser: true
    },
    parserOptions: {
        ecmaFeatures: {
            globalReturn: true,
            generators: false,
            objectLiteralDuplicateProperties: false,
            experimentalObjectRestSpread: true
        },
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    plugins: [],
    settings: {},
    rules: {
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        quotes: ['error', 'single'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
    },
};
