const fs = require('fs');

module.exports.extractJson = (path) => {

    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8', flag:'r+'}, (error, data) => {
            if(error) {
                reject('Error during reading file');
            }
            else {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                }
                catch (errorJson) {
                    reject('Error during Json parse')
                }
            }
        });
    });
}
