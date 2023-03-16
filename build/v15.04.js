// Get the cpy plugin
import cpy from 'cpy';

console.log('v15.04.js loaded');

export async function v1504() {
  console.log('v15.04');

  // Bootstrap 4.6.2 for 2sxc 15.04+
  await cpy([
    'node_modules/bootstrap462/dist/css/bootstrap.min.css',
    'node_modules/bootstrap462/dist/css/bootstrap.min.css.map',
  ], 'packages/bootstrap_4.6.2/dist/css', { flat: true });

  await cpy([
    'node_modules/bootstrap462/dist/js/bootstrap.bundle.min.js',
    'node_modules/bootstrap462/dist/js/bootstrap.bundle.min.js.map',
  ], 'packages/bootstrap_4.6.2/dist/js', { flat: true });

  // Bootstrap 5.2.2 for 2sxc 15.40+
  await cpy([
    'node_modules/bootstrap523/dist/css/bootstrap.min.css',
    'node_modules/bootstrap523/dist/css/bootstrap.min.css.map',
  ], 'packages/bootstrap_5.2.3/dist/css', { flat: true });

  await cpy([
    'node_modules/bootstrap523/dist/js/bootstrap.min.js',
    'node_modules/bootstrap523/dist/js/bootstrap.min.js.map',
  ], 'packages/bootstrap_5.2.3/dist/js', { flat: true });

  // FontAwesome 5.15.4 for 2sxc 15.04+
  // This was copied manually, because the npm package doesn't contain the minified files
  // Source: https://cdnjs.com/libraries/font-awesome/5.15.4
  // https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js
  await cpy([
    'src/font-awesome/5.15.4/js/*.*',
  ], 'packages/font-awesome/5.15.4/js', { flat: true });

  // FontAwesome 6.3.0 for 2sxc 15.04+
  // Source: https://cdnjs.com/libraries/font-awesome
  // https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js
  await cpy([
    'src/font-awesome/6.3.0/js/*.*',
  ], 'packages/font-awesome/6.3.0/js', { flat: true });

  // Fancybox 3.5.7 for 2sxc 15.04+
  await cpy([
    'node_modules/fancybox3.5.7/dist/jquery.fancybox.min.css',
    'node_modules/fancybox3.5.7/dist/jquery.fancybox.min.js',
  ], 'packages/fancybox/3.5.7', { flat: true });

  // FancyBox 4.0.31 for 2sxc 15.04+
  await cpy([
    'node_modules/fancybox4.0.31/dist/fancybox.umd.js',
    'node_modules/fancybox4.0.31/dist/fancybox.css',
  ], 'packages/_fancyapps/ui_4.0.31/dist', { flat: true });

}