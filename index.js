const inquirer = require('inquirer'); 
const fs = require('fs');

const teamMembers = [];
const Manager = require("./lib/Manager")
// const Engineer = require("./lib/Engineer")
// const Intern = require("./lib/Intern")
// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "sample.html");
// const render = require("./lib/render");


const Employee = require("./lib/Employee")

function createManager() {
    console.log("Please Build Your Team:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
        }]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);

            // const htmlContent = generateHTML(answers);
            // console.log("htmlContent:", htmlContent)

            generateHTML(answers);


                });
            };

const generateHTML = (answers) => {

    const html =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team | Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${answers.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
                <li class="list-group-item">Office number: ${answers.officeNumber}</li>
            </ul>
        </div>
    </div>`;
    fs.writeFileSync('sample.html', html, (err) => err ? console.log(err) : '')

};








//     function addEngineer() {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "engineerName",
//                 message: "What is your engineer's name?",
//             },
//             {
//                 type: "input",
//                 name: "engineerId",
//                 message: "What is your engineer's id?",
//             },
//             {
//                 type: "input",
//                 name: "engineerEmail",
//                 message: "What is your engineer's email?",
//             },
//             {
//                 type: "input",
//                 name: "engineerGithub",
//                 message: "What is your engineer's GitHub username?",
//             }]).then(answers => {
//                 const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
//                 teamMembers.push(engineer);
//                 console.log("teamMembers", teamMembers);
//                 createTeam();

//             });
        
//         };


// function addIntern() {
//             inquirer.prompt([
//                 {
//                     type: "input",
//                     name: "internName",
//                     message: "What is your intern's name?",
//                 },
//                 {
//                     type: "input",
//                     name: "internId",
//                     message: "What is your intern's id?",
//                 },
//                 {
//                     type: "input",
//                     name: "internEmail",
//                     message: "What is your intern's email?",
//                 },
//                 {
//                     type: "input",
//                     name: "internSchool",
//                     message: "What is your intern's school?",
//                 }]).then(answers => {
//                     const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//                     teamMembers.push(intern);
//                     console.log("teamMembers", teamMembers);

//                     }) 
            
//             };

    
// function createTeam() {
//     inquirer.prompt([
//         {
//           type: "list",
//           name: "memberChoice",
//           message: "Which type of team member would you like to add?",
//           choices: ["Engineer", "Intern", "I don't want to add any more team members"]
//         }
//       ])
//       .then(userChoice => {
//         switch(userChoice.memberChoice) {
//             // case "Engineer":
//             //     addEngineer();
//             //     break;
//             // case "Intern":
//             //     addIntern();
//             //     break;
//             // default:
//             //     buildTeam();
//           }
//       });


// }

createManager();
