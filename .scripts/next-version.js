const recommendedBump = require('conventional-recommended-bump');
const semver = require('semver');

const packageJson = require('../package.json');

const getNextVersion = (currentVersion) => {
    return new Promise((resolve, reject) => {
        recommendedBump(
            {
                preset: 'angular'
            },
            (e, release) => {
                if (e) {
                    reject(e);
                    return;
                }

                const nextVersion =
                    semver.valid(release.releaseType) ||
                    semver.inc(currentVersion, release.releaseType);

                resolve(nextVersion);
            }
        );
    });
};

getNextVersion(packageJson.version)
    .then((version) => console.log(version))
    .catch((error) => console.log(error));
