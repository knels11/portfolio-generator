//port all of the fs functionality that's currently used in app.js
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {


            //if there's an error, reject the promise & send the err to the promise's catch method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn't accidentally execute the 
                //resolve() function as well
                return;
            }
            //if everything goes well, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
    } 
    console.log('Style sheet copied successfully!');
});
});
};
//exporting an object with 2 functions, used as methods
//also can be simplified as module.exports ={ writeFile, copyFile };
module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};