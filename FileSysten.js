const fs = require('fs');
// create file
fs.writeFile('./exam.txt', 'this is data', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Create successful');
    }
})

// read file
fs.readFile('./exam.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})