//template literals
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

//profile data args array- holds the user command line args
const profileDataArgs = process.argv.slice(2, process.argv.length);

//multi line strings
const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
};

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

//logs name and github inputs and confirm they match
console.log(name,github);
console.log(generatePage(name, github));


//console.log(generatePage('Kierra', 'knels11'));

//code below returns undefined
//es6 ft ~ assignment destructuring: assigns elements of an array to a variable in a single expression
//const [name, github] = profileDataArgs;

//console.log(generatePage(name,github));
