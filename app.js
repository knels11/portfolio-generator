const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input', 
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type:'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
    },
    {
        type: 'input', 
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout}) => {
            if (confirmAbout) {
                return true;
            } else {
                return false;
            }
        }
    },
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
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
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
//expression that invokes the generatePage() with portfolioData and
//uses the result from our inquirer prompts as an arg called portfolioData
    const pageHTML = generatePage();
    fs.writeFile('./index.html', pageHTML, err => {
        if (err) throw new Error(err);
    });
    console.log('Page created! Check out index.html in this directory to see it!');
});

const generateProjects = projectsArr => {
    return `
    <section class="my-3" id="portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline-block"> Work </h2>
    <div class="flex-row justify-space-between">
    ${projectsArr
    .filter(({ feature }) => feature)
    .map(({ name, description, languages, link }) => {
        return `
        <div class="col-12 mb-2 bg-dark text-light p-3">
        <h3 class="portfolio-item-title text-light"> ${name} </h3>
        <h5 class="portfolio-languages">
        Built With:
        ${languages.join(', ')}
        </h5>
        <p>${description}</p>
        <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i> View Project on GitHub </a>
        </div>
        `;
    })
    .join('')}

    ${projectsArr
    .filter(({ feature }) => !feature)
    .map(({ name, description, languages, link }) => {
        return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light"> ${name} </h3>
        <h5 class="portfolio-languages">
        Built With:
        ${languages.join('')}
        </div>
        </section>
        `;
    })
}
`
};


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
