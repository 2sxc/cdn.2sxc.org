// Get the cpy plugin
import cpy from 'cpy';

console.log('v15.04.js loaded');

export async function v1504() {
  console.log('Running v15.04');

  var cdnMap = [
    // Bootstrap 4.6.2 for 2sxc 15.04+
    { from: 'node_modules/bootstrap462/dist/css/bootstrap.min.css', to: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css' },
    { from: 'node_modules/bootstrap462/dist/css/bootstrap.min.css.map', to: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css.map' },
    { from: 'node_modules/bootstrap462/dist/js/bootstrap.bundle.min.js', to: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js' },
    { from: 'node_modules/bootstrap462/dist/js/bootstrap.bundle.min.js.map', to: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js.map' },

    // Bootstrap 5.2.2 for 2sxc 15.40+
    { from: 'node_modules/bootstrap523/dist/css/bootstrap.min.css', to: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' },
    { from: 'node_modules/bootstrap523/dist/css/bootstrap.min.css.map', to: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css.map' },
    { from: 'node_modules/bootstrap523/dist/js/bootstrap.min.js', to: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js' },
    { from: 'node_modules/bootstrap523/dist/js/bootstrap.min.js.map', to: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js.map' },

    // FontAwesome 5.15.4 for 2sxc 15.04+
    // This was copied manually, because the npm package doesn't contain the minified files
    // Source: https://cdnjs.com/libraries/font-awesome/5.15.4
    // https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js
    { from: 'src/font-awesome/5.15.4/js/all.min.js', to: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js' },

    // FontAwesome 6.3.0 for 2sxc 15.04+
    // Source: https://cdnjs.com/libraries/font-awesome
    // https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js
    { from: 'src/font-awesome/6.3.0/js/all.min.js', to: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js' },

    // Fancybox 3.5.7 for 2sxc 15.04+
    { from: 'node_modules/fancybox3.5.7/dist/jquery.fancybox.min.css', to: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css' },
    { from: 'node_modules/fancybox3.5.7/dist/jquery.fancybox.min.js', to: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js' },

    // FancyBox 4.0.31 for 2sxc 15.04+
    { from: 'node_modules/fancybox4.0.31/dist/fancybox.umd.js', to: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.31/dist/fancybox.umd.js' },
    { from: 'node_modules/fancybox4.0.31/dist/fancybox.css', to: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.31/dist/fancybox.css' },

  ];

  /** Helper */
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  /** Helper */
  function rewriteDest(dest, version) {
    const index = getPosition(dest, '/', 3);
    const newPath = `packages/v${version}${dest.substring(index)}`;
    return newPath.split('@').join('-');
  }

  // Copy the files
  for (let i = 0; i < cdnMap.length; i++) {
    const element = cdnMap[i];
    const dest = rewriteDest(element.to, 15);
    console.log(`created ${dest}`);
    await cpy(element.from, dest, { flat: true });
  }
  
  console.log('Completed v15.04');
}