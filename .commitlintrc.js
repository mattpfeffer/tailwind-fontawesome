/*
 * --- CONFIGURATION ---
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
            ['build', 'chore', 'clean', 'drop', 'edit', 'feat', 'fix', 'test']
        ]
    }
};

/*
 * --- CHEAT SHEET ---
 *
 * Format:
 * <type>(<scope>): <subject>
 *
 * Types:
 * - build: Changes that affect the build system, continuous integration etc
 * - chore: Other changes that don't modify src or test files
 * - clean: Refactoring code, formatting, removing commented code etc
 * - drop: Deprecation notices for end users or feature removals
 * - feat: A new feature
 * - fix: A bug fix, security patch or performance improvements
 * - test: Adding missing tests or reconfiguring existing ones
 * - edit: Editing content (static sites) or documentation like readmes and licenses
 *
 * Scopes:
 * In monorepos, the scope should be set to the name of the package affected. Otherwise, it should
 * be omitted.
 *
 * Subject:
 * A succinct description of the change.
 * - Use the imperative, present tense: "change" not "changed" nor "changes"
 * - Don't capitalize the first letter
 * - No dot (.) at the end
 *
 * Description (optional):
 * When the commit needs extra context or information.
 * - Use the imperative, present tense: "change" not "changed" nor "changes"
 * - Sentence case
 *
 * Breaking changes:
 * All breaking changes have to be mentioned following the description.
 * - Start with the words BREAKING CHANGE: followed by space or two newlines
 * - The rest of the commit message is used to describe those changes
 *
 * Reverting a commit:
 * Reverts should be avoided if possible, but when required, the commit should begin with "revert:",
 * followed by the header of the reverted commit. For example:
 * revert: <type>(<scope>): <subject>
 */
