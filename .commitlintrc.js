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
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'deprecate',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'remove',
                'revert',
                'security',
                'style',
                'test',
                'edit'
            ]
        ],
        'scope-empty': [2, 'always'],
        'subject-case': [2, 'always', ['lower-case']]
    }
};
