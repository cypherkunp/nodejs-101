const http = require('http');
const url = 'http://www.google.com'

http.get(url, (response) => {
    let rawData = '';
    response.on('data', (chunk) => {
       rawData += chunk;
    });
    response.on('end', () => {
        console.log(rawData);
    });

}).on('error', (error) => {
    console.log(`Error occured: ${error.message}`);

});