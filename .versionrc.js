module.exports = {
    types: [
        { type: 'build', hidden: true },
        { type: 'chore', hidden: true },
        { type: 'clean', hidden: true },
        { type: 'edit', hidden: true },
        { type: 'drop', section: 'Drops' },
        { type: 'feat', section: 'Adds' },
        { type: 'fix', section: 'Fixes' },
        { type: 'test', hidden: true }
    ],
    skip: {
        // "tag": true
    }
};
