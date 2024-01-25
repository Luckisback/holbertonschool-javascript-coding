#!/usr/bin/node
const request = require('request');
const fs = require('fs');
request(process.argv[2], (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  fs.writeFile(process.argv[3], response.body, 'utf-8', (err) => {
    if (err) { console.error(err); }
  });
});
