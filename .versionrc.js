module.exports = {
    types: [
        { type: 'build', hidden: true },
        { type: 'chore', hidden: true },
        { type: 'ci', hidden: true },
        { type: 'deprecate', hidden: true },
        { type: 'docs', hidden: true },
        { type: 'feat', section: 'Adds' },
        { type: 'fix', section: 'Fixes' },
        { type: 'perf', hidden: true },
        { type: 'refactor', hidden: true },
        { type: 'remove', section: 'Removes' },
        { type: 'revert', hidden: true },
        { type: 'security', section: 'Fixes' },
        { type: 'style', hidden: true },
        { type: 'test', hidden: true },
        { type: 'edit', hidden: true },
    ],
    skip: {
        // "tag": true
    },
};
