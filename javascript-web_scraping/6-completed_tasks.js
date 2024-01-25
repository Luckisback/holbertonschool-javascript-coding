#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  const data = JSON.parse(response.body);
  const completedTasksByUser = {};

  data.forEach(task => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });
  console.log(completedTasksByUser);
});
