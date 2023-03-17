import GetGoogleFonts from 'get-google-fonts';

// User Agent of 2dm Chrome 2023-03-17
// Important to use a modern user agent, otherwise the font files are pretty messed up and huge.
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';

export async function v1504Fonts() {
  const downloader = new GetGoogleFonts();

  // https://www.npmjs.com/package/get-google-fonts
  downloader.download('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap', {
    outputDir: 'src/google-fonts/roboto',
    userAgent: userAgent,
  });

  downloader.download('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', {
    outputDir: 'src/google-fonts/material-symbols-outlined',
    userAgent: userAgent,
  });

}

v1504Fonts();