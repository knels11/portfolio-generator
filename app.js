const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');

inquirer
.prompt([
    {
        type: 'input', 
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
  //  if (err) throw err;
    //console.log('Portfolio complete! Check out index.html to see the output!');
//});

///////////////// ORIGINAL CODE ///////////////////////////////////////////////////
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//create a function to take in the input and display some output
//const printProfileData = profileDataArr => {
    //this... 
  //  for (let i = 0; i < profileDataArr.length; i += 1) {
    //    console.log(profileDataArr[i]);
    //}
    //console.log('=============');

    //is the same as this...
    //profileDataArr.forEach(profileItem => console.log(profileItem));
//};
//printProfileData(profileDataArgs);