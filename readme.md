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

## Contents

This is still WIP, but currently contains:

1. Bootstrap 4.6.2 CSS and JS - for 2sxc 15.04+
1. Bootstrap 5.x ? - for 2sxc 15.04+

todo
