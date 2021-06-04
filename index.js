const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully created file!'))
        console.log('fileName:', fileName)
        console.log('data:', data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        console.log('data:', data)
    });
}
// Function call to initialize app
init();
