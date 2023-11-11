# tailwind-fontawesome

A set of utility classes that make pairing Font Awesome with Tailwind CSS a breeze 💨.

## Before you start

Before you can use this plugin, you still need to separately include the Font Awesome library in
your project.

The quickest way to get started is via the official CDN with a free Font Awesome kit via the
[website](https://fontawesome.com/start). Other methods are available as well.

### Support

This plugin is **currently compatible with both Tailwind 2 & 3**. From the 1.0.0 release onwards,
only Tailwind 3 will be supported. Previous releases should continue to work for the foreseeable
future however.

## Installation

Install the plugin:

```sh
# Using NPM
npm install tailwind-fontawesome

# Using Yarn
yarn add tailwind-fontawesome

# Using PNPM
pnpm install tailwind-fontawesome
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')
        // ...
    ]
};
```

### Need the Pro version?

By default, the plugin will reference the free Font Family. If you have a Font Awesome Pro kit, you
can switch the Font Family by passing the following configuration option:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')({
            pro: true
        })
        // ...
    ]
};
```

### What about Font Awesome 6?

The plugin defaults to Font Awesome 5, however, from version 0.3 Font Awesome 6 icon sets are also
supported:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')({
            version: 6
        })
        // ...
    ]
};
```

### Classic vs Sharp?

The newer 'sharp' icon sets are supported via the `family` option (v0.4 and up), otherwise 'classic'
mode is assumed:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')({
            family: 'sharp'
        })
        // ...
    ]
};
```

In the above use case, the `pro` and `version` options may be omitted (Sharp sets are only available
in Font Awesome 6 Pro).

### Custom Mapping

If you want to have a custom mapping or add missing icons you can use the `custom` option (v0.6 and
up):

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')({
            custom: [{ name: 'x-twitter', code: 'e61b' }]
        })
        // ...
    ]
};
```

## Usage

At it's simplest, combine a positional class (e.g. `icon-before`) and an icon class (e.g.
`icon-{name}`) to display an icon in the target element - `{name}` refers to the icon name in dash
case as listed on the official website:

```html
<button class="icon-before icon-chevron-right">
    <!-- Label -->
</button>
```

Use `icon-space-{size}` to adjust the gap between the icon and other content:

```html
<button class="icon-before icon-chevron-right icon-space-sm">
    <!-- Label -->
</button>
```

### Placement

| Class          | Behavior                                                                             |
| -------------- | :----------------------------------------------------------------------------------- |
| `icon-before`  | Place icon at the start of content using `::before`                                  |
| `icon-after`   | Place icon at the end of an content using `::after`                                  |
| `icon-outside` | Place icon outside the left-hand margin, useful for bulleting the first line of text |
| `icon-inline`  | Used when directly referencing an icon with Unicode in your markup (e.g. `&#xf268`)  |

### Styles

| Class            | Weight | Font Family                                               |
| ---------------- | ------ | :-------------------------------------------------------- |
| `icon-thin`      | `100`  | `"Font Awesome 6 Pro"` only                               |
| `icon-light`     | `300`  | `"Font Awesome {5/6} Pro"`                                |
| `icon-regular`   | `400`  | `"Font Awesome {5/6} Pro"`                                |
| `icon-solid`     | `900`  | `"Font Awesome {5/6} Free"` or `"Font Awesome {5/6} Pro"` |
| `icon-duotone`\* | `900`  | `"Font Awesome {5/6} Duotone"`                            |
| `icon-brands`    | `900`  | `"Font Awesome {5/6} Brands"`                             |

\* _Not fully supported, yet_

### Spacing

| Class            | Margin    |
| ---------------- | --------- |
| `icon-space-xs`  | `0.25rem` |
| `icon-space-sm`  | `0.5rem`  |
| `icon-space-md`  | `0.75rem` |
| `icon-space-lg`  | `1rem`    |
| `icon-space-xl`  | `1.25rem` |
| `icon-space-2xl` | `1.5rem`  |
| `icon-space-3xl` | `1.75rem` |

### Vertical Alignment

This plugin defaults to 'middle' for icon alignment but sometimes this is not the best approach, as
in the case of uppercase text. Use the below utilities to override that behaviour.

| Class           | Vertical Alignment |
| --------------- | ------------------ |
| `icon-baseline` | `baseline`         |
| `icon-sub`      | `sub`              |
| `icon-super`    | `super`            |
| `icon-top`      | `top`              |
| `icon-middle`   | `middle`           |
| `icon-bottom`   | `bottom`           |

### Icons

| Class                | Unicode |
| -------------------- | ------- |
| `icon-chevron-right` | `f054`  |
| `icon-paper-plane`   | `f1d8`  |
| `...`                | `...`   |

_Full list of available icons at the Font Awesome [website](https://fontawesome.com/icons)_

## Customization

You can override/extend the generated style and spacing values in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    theme: {
        iconStyle: {
            thin: '100',
            light: '300',
            regular: '400',
            solid: '900'
            // Brands and Duotone are reserved and can't be overridden
        },
        iconSpacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '0.75rem',
            lg: '1rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem'
        }
    }
};
```
