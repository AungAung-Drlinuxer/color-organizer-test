const https = require('https');
const fs = require('fs');

async function updateReadme() {
  const response = await new Promise((resolve, reject) => {
    https.get('https://zenquotes.io/api/random', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });

  const quote = `${response[0].q} - ${response[0].a}`;

  const readmePath = `${process.env.GITHUB_WORKSPACE}/README.md`;
  let readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const startMarker = '<!--START_QUOTE-->';
  const endMarker = '<!--END_QUOTE-->';

  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const newReadmeContent = 
      readmeContent.slice(0, startIndex + startMarker.length) + 
      '\n' +
      quote + 
      '\n' +
      readmeContent.slice(endIndex);

    fs.writeFileSync(readmePath, newReadmeContent);
  }
}

updateReadme();

