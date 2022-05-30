const _plugin = require('tailwindcss/plugin');

const icons = require('./manifest.js');

module.exports = _plugin.withOptions(
    (options) => {
        return function ({ e, addUtilities, theme }) {
            let pro, version;
            if (typeof options !== 'undefined') {
                ({ pro, version } = options);
            }

            const fontVersion =
                version === 6 ? 'Font Awesome 6' : 'Font Awesome 5';
            const fontFamily = pro
                ? '"' + fontVersion + ' Pro"'
                : '"' + fontVersion + ' Free"';
            // }

            const iconStyle = theme('iconStyle');
            const iconSpacing = theme('iconSpacing');

            const utilities = [
                {
                    // Positioning
                    '.icon-before': {
                        '&::before': {
                            fontFamily: fontFamily,
                            verticalAlign: 'middle',
                        },
                        '&::after': {
                            content: '"" !important',
                        },
                    },
                    '.icon-after': {
                        '&::before': {
                            content: '"" !important',
                        },
                        '&::after': {
                            fontFamily: fontFamily,
                            verticalAlign: 'middle',
                        },
                    },
                    '.icon-outside': {
                        '&::before': {
                            fontFamily: fontFamily,
                            verticalAlign: 'middle',
                            position: 'absolute',
                            transform: 'translateX(-1.5em)',
                        },
                        '&::after': {
                            content: '"" !important',
                        },
                    },
                    '.icon-inline': {
                        fontFamily: fontFamily,
                        verticalAlign: 'middle',
                    },
                },
                // Styles
                Object.entries(iconStyle).map(([key, value]) => {
                    return {
                        [`.${e(`icon-${key}`)}`]: {
                            '&::before,&::after': {
                                fontWeight: `${value}`,
                            },
                        },
                    };
                }),
                {
                    '.icon-duotone': {
                        '&.icon-inline,&::before,&::after': {
                            fontFamily: '"' + fontVersion + ' Duotone"',
                        },
                    },
                    '.icon-brands': {
                        '&.icon-inline,&::before,&::after': {
                            fontFamily: '"' + fontVersion + ' Brands"',
                        },
                    },
                },
                // Spacing
                Object.entries(iconSpacing).map(([key, value]) => {
                    return {
                        [`.${e(`icon-space-${key}`)}`]: {
                            '&.icon-before::before': {
                                marginRight: `${value}`,
                            },
                            '&.icon-after::after': {
                                marginLeft: `${value}`,
                            },
                        },
                    };
                }),
                // Icons
                icons.map((icon) => {
                    return {
                        [`.${e(`icon-${icon.name}`)}`]: {
                            '&::before': {
                                content: `"\\${icon.code}"`,
                            },
                            '&::after': {
                                content: `"\\${icon.code}"`,
                            },
                        },
                    };
                }),
            ];

            addUtilities(utilities);
        };
    },
    () => ({
        theme: {
            iconStyle: {
                thin: '100',
                light: '300',
                regular: '400',
                solid: '900',
            },
            iconSpacing: (theme) => ({
                xs: theme('spacing.1'),
                sm: theme('spacing.2'),
                md: theme('spacing.3'),
                lg: theme('spacing.4'),
                xl: theme('spacing.5'),
                '2xl': theme('spacing.6'),
                '3xl': theme('spacing.7'),
            }),
        },
    })
);
