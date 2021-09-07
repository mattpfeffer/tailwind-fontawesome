# tailwind-fontawesome

A set of utility classes that make pairing Font Awesome 5 with Tailwind CSS a breeze 💨.

## Before you start

Before you can use this plugin, you still need to separately include the Font Awesome library in your project.

The quickest way to get started is via the official CDN with a free Font Awesome kit via the [website](https://fontawesome.com/start). Other methods are available as well.

## Installation

Install the plugin:

```sh
# Using npm
npm install tailwind-fontawesome

# Using Yarn
yarn add tailwind-fontawesome
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome'),
        // ...
    ],
};
```

### Need the Pro version?

By default, the plugin will reference the free Font Family. If you have a Font Awesome Pro kit, you can switch the Font Family by passing the following configuration option:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-fontawesome')({
            pro: true,
        }),
        // ...
    ],
};
```

## Usage

At it's simplest, combine a positional class (e.g. `icon-before`) and an icon class (e.g. `icon-{name}`) to display an icon in the target element - `{name}` refers to the icon name in dash case as listed on the official website:

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

| Class          | Behavior                                                                            |
| -------------- | :----------------------------------------------------------------------------------- |
| `icon-before`  | Place icon at the start of content using `::before`                                  |
| `icon-after`   | Place icon at the end of an content using `::after`                                  |
| `icon-outside` | Place icon outside the left-hand margin, useful for bulleting the first line of text |
| `icon-inline`  | Used when directly referencing an icon with Unicode in your markup (e.g. `&#xf268`)  |

### Styles

| Class          | Weight | Font Family                                       |
| -------------- | ------ | :------------------------------------------------ |
| `icon-light`   | `300`  | `"Font Awesome 5 Pro"`                            |
| `icon-regular` | `400`  | `"Font Awesome 5 Pro"`                            |
| `icon-solid`   | `900`  | `"Font Awesome 5 Free"` or `"Font Awesome 5 Pro"` |
| `icon-duotone` | `900`  | `"Font Awesome 5 Duotone"`                        |
| `icon-brands`  | `900`  | `"Font Awesome 5 Brands"`                         |

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

### Icons

| Class                | Unicode |
| -------------------- | ------- |
| `icon-chevron-right` | `f054`  |
| `icon-paper-plane`   | `f1d8`  |
| `...`                | `...`   |

_Full list of available icons at the Font Awesome [website](https://fontawesome.com/v5.15/icons)_

## Customization

You can override/extend the generated style and spacing values in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    theme: {
        iconStyle: {
            light: '300',
            regular: '400',
            solid: '900',
            // Brands and Duotone are reserved and can't be overridden
        },
        iconSpacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '0.75rem',
            lg: '1rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem',
        },
    },
};
```
