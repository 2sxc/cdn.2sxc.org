# cdn.2sxc.org

This is a simple, lightweight CDN for 2sxc.
The repo is <https://github.com/2sxc/cdn.2sxc.org>

* Last Publish: 2023-03-21 (2sxc v15.04 - 16.00)
* Last Docs update: 2023-05-03

## Background

2sxc uses various external javascripts, css files and fonts from external sources, such as

* cdn.jsdelivr.net (Bootstrap)
* fonts.googleapis.com (Google Fonts)

This is a problem for some customers, for reasons such as

1. Possibly need to whitelist domains (Firewall or CSP)
1. GDPR issues, because of third party cookies

## Solution

This repo has 2 purposes:

1. Be hosted on `https://cdn.2sxc.org/` as a neutral, cookie-free CDN
1. Can be cloned by anybody who wishes to copy these files in the same structure to their own website or CDN
1. The default location for same-site cdns is `/cdn/` - so it's easy to copy to your own site
1. But you can also specify another url in the settings, so you can put it anywhere

## Structure

Internally all the packages we publish are copied to the `/packages` folder.
This means that the default targets are:

* `https://cdn.2sxc.org/packages`
* `/cdn/packages` (on your site)

## Special Renames

The original folders often have a `@` character in the path.
This causes trouble when hosting on a Windows server.
Because of this, the paths here replace the `@` character with `_` - so `@fancyapps` becomes `_fancyapps`.


## Contents

1. `/packages/v15` - Resources for 2sxc 15.04+ and 16.00+
    1. Bootstrap 4.6.2 CSS and JS
    1. Bootstrap 5.2.3 CSS and JS
    1. FancyBox 3.5.7
    1. FancyBox 4.0.31 (fancyapps ui)
    1. Font Awesome 5.15.4
    1. Font Awesome 6.3.0
    1. Google Fonts: Material Icons 400 and Outlined 400
    1. Google Fonts: Roboto 300, 400 and 500


## Maintenance


### How to Add More Packages in Many Versions

We usually have the same package in multiple versions (eg Bootstrap 4.6.2, 5.2.3, 5.3.0 etc.).
To allow them all to be added to npm we must give them an own name in our node_modules like this:

`npm i bootstrap523@npm:bootstrap@5.2.3`

Then the packages are in the npm-folder, but not yet published.

### How to Downloads Fonts from Google

Use `npm run download-fonts` to download the fonts from Google.
They will be copied to the `/src` folder but won't publish them yet.

### How to Publish Packages

The scripts to publish the proper files are in the `/build` folder.
We will have different files like `v15.js` for each version to publish.

Use `npm run build` to build all the resources.
