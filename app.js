//template literals
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
const fs = require('fs');
//receive exported functions- the object in module.exports assignment will be reassigned to generatePage variable
const generatePage = require('./src/page-template.js');

//profile data args array- holds the user command line args
const profileDataArgs = process.argv.slice(2);
//es6 ft ~ assignment destructuring: assigns elements of an array to a variable in a single expression
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    //in the callback function block, a conditional statement checks for the err being returned
    if (err) throw new Error(err);
    //success statement that directs users to inspect the newly created file
    console.log('Portfolio complete! Check out index.html to see the output!');
});


//logs name and github inputs and confirm they match
//console.log(name,github);
//console.log(generatePage(name, github));

//multi line strings
//const generatePage = (userName, githubName) => {
    //return `
    //Name: ${userName}
    //GitHub: ${githubName}
    //`;
//};

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];




