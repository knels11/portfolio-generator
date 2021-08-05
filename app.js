//template literals
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

//profile data args array- holds the user command line args
const profileDataArgs = process.argv.slice(2, process.argv.length);

//html template literal/string
const generatePage = (name, github) => {
    return `
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title> Portfolio Demo </title>
    </head>
    
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
//es6 ft ~ assignment destructuring: assigns elements of an array to a variable in a single expression
const [name, github] = profileDataArgs;

//logs name and github inputs and confirm they match
console.log(name,github);
console.log(generatePage(name, github));

//multi line strings
//const generatePage = (userName, githubName) => {
    //return `
    //Name: ${userName}
    //GitHub: ${githubName}
    //`;
//};

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];




