# cdn.2sxc.org

This is a simple, lightweight CDN for 2sxc.

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

This is still WIP, but currently contains:

1. Bootstrap 4.6.2 CSS and JS - for 2sxc 15.04+
1. Bootstrap 5.2.3 CSS and JS - for 2sxc 15.04+

todo - fonts, etc.

1. Roboto
1. Google Material Font Icons

## How to Add More Packages

We usually have the same package in multiple versions (eg Bootstrap 4.6.2, 5.2.3, 5.3.0 etc.).
To allow them all to be added to npm we must give them an own name in our node_modules like this:

`npm i bootstrap523@npm:bootstrap@5.2.3`