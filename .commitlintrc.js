/*
 * !!! Important !!!
 *
 * Prior to fist use, the following commands must be run:
 *
 * yarn husky install
 * yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
 *
 */

module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
            'edit'
        ]],
    }
};
