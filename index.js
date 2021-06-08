const inquirer = require('inquirer'); 
const fs = require('fs');

// const Manager = require("./src/manager.html")
// const Employee = require("./lib/Employee")
// const Engineer = require("./lib/Engineer")
// const Intern = require("./lib/Intern")

const generatehtml = (name, id, email, officeNumber) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${name}</h2>
            
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
            </ul>
        </div>
    </div>
</body>
</html>`

function createManager() {
    console.log("Please Build Your Team:");
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager's Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Manager's ID Number:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Manager's current office number:",
        }]).then(answers => {
        let { name, id, email, officeNumber } = answers
        console.log("answers:", answers);
        console.log("name:", name);
        console.log("id:", id);
        console.log("email:", email);
        console.log("officeNumber:", officeNumber);
        createTeam();
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub username?",
            }]).then(function(answers) {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                console.log("answers.name:", answers.name);
                console.log("answers.id:", answers.id);
                console.log("answers.email:", answers.email);
                console.log("answers.github:", answers.github);
                }) 
        
        };

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
//                     const { name, id, email, school } = answers
//                     console.log("answers:", answers);
//                     console.log("name:", name);
//                     console.log("id:", id);
//                     console.log("email:", email);
//                     console.log("school:", school);
//                     }) 
            
//             };
    
function createTeam() {
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
      ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            // case "Intern":
            //     addIntern();
            //     break;

          }
      });


}

function buildTeam() {

}


createManager();
