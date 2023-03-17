import GetGoogleFonts from 'get-google-fonts';

export async function v1504Fonts() {
  const downloader = new GetGoogleFonts();

  // https://www.npmjs.com/package/get-google-fonts
  downloader.download('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap', {
    outputDir: 'src/google-fonts/roboto',
  });

  downloader.download('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', {
    outputDir: 'src/google-fonts/material-symbols-outlined',
  });

}

v1504Fonts();