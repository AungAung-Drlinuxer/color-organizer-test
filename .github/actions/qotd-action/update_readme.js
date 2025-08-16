const https = require('https');
const fs = require('fs');
const path = require('path');

async function updateReadme() {
  const url = 'https://zenquotes.io/keywords/success';

  console.log(`Fetching quote from ${url}`);

  const response = await new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'Accept': 'application/json',
      },
    }, (res) => {
      if (res.statusCode !== 200) {
        let errorData = '';
        res.on('data', chunk => errorData += chunk);
        res.on('end', () => {
          console.error(`Error: Received status code ${res.statusCode}`);
          console.error('Response body:', errorData);
          return reject(new Error(`API request failed with status code ${res.statusCode}`));
        });
        return;
      }

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON response: ${e.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`HTTPS request failed: ${err.message}`));
    });
  });

  if (!response || !Array.isArray(response) || response.length === 0) {
    console.error('Error: Invalid response from quote API', JSON.stringify(response, null, 2));
    throw new Error('Could not find a quote in the API response.');
  }


  // Use the readme_path input from action.yml
  const readmePath = path.join(process.env.GITHUB_WORKSPACE, process.env.INPUT_README_PATH);
  console.log(`Updating file: ${readmePath}`);
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const startMarker = '<!--START_QUOTE-->';
  const endMarker = '<!--END_QUOTE-->';

  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const newReadmeContent =
      readmeContent.slice(0, startIndex + startMarker.length) +
      '\n' + quote + '\n' +
      readmeContent.slice(endIndex);

    fs.writeFileSync(readmePath, newReadmeContent);
    console.log(`Successfully updated README with quote: "${quote}"`);
  } else {
    console.warn(`Could not find ${startMarker} and ${endMarker} in ${readmePath}. Skipping.`);
  }
}

(async () => {
  try {
    await updateReadme();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
