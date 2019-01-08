const http = require('http');
const url = 'http://www.google.com'

http.get(url, (response) => {
    let chunkSize = 0;
    response.on('data', (chunk) => {
        console.log(chunk.toString('utf8'));
        chunkSize++;
    });
    response.on('end', () => {
        console.log('Response has ended, chunk size is > ', chunkSize);
    });

}).on('error', (error) => {
    console.log(`Error occured: ${error.message}`);

});