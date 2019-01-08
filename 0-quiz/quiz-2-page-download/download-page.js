const http = require('http');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

const downloadFile = (url) => {
    const fileName = uuidv1();
    const folderPath = path.join(__dirname, '/downloads/');
    const fileAbsPath = path.resolve(folderPath + fileName + '.html');

    http.get(url, (response) => {
        console.log('Download Started...');
        
        let rawData = '';
        response.on('data', (chunk) => {
            rawData += chunk;
        });

        response.on('end', () => {
            fs.mkdir(folderPath, err => {
                if (err && !err.message.includes('file already exists')) {
                    console.log(`[ERROR]: ${err.message}`);
                }
            });
            fs.writeFile(fileAbsPath, rawData, err => {
                if (err) {
                    console.log(`[ERROR]: ${err.message}`);
                }
                console.log('Download Complete, Saved to file: ' + fileName);
            });
        });

    }).on('error', (error) => {
        console.log(`[ERROR]: ${error}`);
    });

};

downloadFile(process.argv[2]);