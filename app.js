<<<<<<< HEAD
const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input', 
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input', 
        name: 'about',
        message: 'Provide some information about yourself:'
    }
]);
};
//if there's no projects array property, create one

promptUser().then(answers => console.log(answers));

console.log( `====== Add a New Project =======`);

const promptProject = portfolioData => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox', 
            name: 'languages',
            message: 'What did you build this project with? (check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input', 
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};
promptProject()
.then(projectData => {
    portfolioData.projects.push(projectData);
    //evaluates the user response to if they want to add more projects
    if (projectData.confirmAddProject) {
    //if the user wishes to add more then this condition will evaluate to true
    //and call the next function
        return promptProject(portfolioData);
    } else {
        return portfolioData;
    }
});

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});


//const pageHTML = generatePage(name, github); 0

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
=======
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




>>>>>>> 6c73c53651b83170676013e4d78e79a3784d7a90
