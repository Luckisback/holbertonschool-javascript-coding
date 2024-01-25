const request = require('request');

const movieId = process.argv[2];

if (!movieId || isNaN(movieId)) {
  console.error('Please provide a valid movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error occurred while fetching data:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    process.exit(1);
  }

  const filmData = JSON.parse(body);
  const charactersUrls = filmData.characters;

  fetchCharacters(charactersUrls);
});

function fetchCharacters(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const characterData = JSON.parse(body);
          resolve(characterData.name);
        }
      });
    });
  });

  Promise.all(promises)
    .then(characterNames => {
      characterNames.forEach(name => console.log(name));
    })
    .catch(error => {
      console.error('Error occurred while fetching characters:', error);
      process.exit(1);
    });
}

