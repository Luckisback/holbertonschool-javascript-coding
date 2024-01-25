#!/usr/bin/node
const request = require('request');
request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  // Display the name of the film
  console.log(JSON.parse(response.body).title);
});
