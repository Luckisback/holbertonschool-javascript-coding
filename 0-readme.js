const fs = require('fs');

// Check if file path is provided
if (process.argv.length < 3) {
    console.error('Usage: node script.js <file-path>');
    process.exit(1);
}

// Extract file path from command line arguments
const filePath = process.argv[2];

// Read file content
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
