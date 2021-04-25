// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",   
    message: "Application Name:",
    name: "title",
},
{  
    type: "input", 
    message: "Describe the usage process",
    name: "useage",
},
{   
    type: "input", 
    message: "What is the installation process?",
    name: "installation",
},
{   
    type: "input", 
    message: "Support:",
    name: "contactNames",
},
{   
    type: "input",
    message: "Planned future developments",
    name: "roadmap"
},
{   
    type: "input", 
    message: "Collaboration/Commit Access and Permissions",
    name: "permissions"
},
{   
    type: "input", 
    message: "Acknowledgements",
    name: "acknowledgements"
},
{   
    type: "list",
    message: "Licence choices",
    name: "license",
    choices: [
        "Apache",
        "Academic",
        "Open",
        "GNU",
        "Mozilla",
        "ISC",
        "MIT"
                
    ]
}];


const promptUser = () => {
    return inquirer
        .prompt(questions);
}

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
    console.log("Please input in accoradance with the following prompts to generate a readme")

    const answers = await promptUser();

    const readMe = generateMarkdown(answers);

    await writeToFile("README.md", readMe);

    console.log("Readme Created");

} 
    catch (err) {
    console.error("Error compiling Data. Readme not created.");
    console.log(err);
}}

// Function call to initialize app
init();
