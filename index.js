const inquirer = require('inquirer'); 
const fs = require('fs');

const teamMembers = [];
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
// const Employee = require("./lib/Employee")

// const generatehtml = (name, id, email, officeNumber) => `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//         <div class="card-body">
//             <ul class="list-group">
//                 <li class="list-group-item">ID: ${manager.getId()}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//                 <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
//             </ul>
//         </div>
//     </div>
// </body>
// </html>`

function createManager() {
    console.log("Please Build Your Team:");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
        }]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            createTeam();
                // console.log("teamMembers", teamMembers);
                });
            };



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
            }]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                console.log("teamMembers", teamMembers);
                createTeam();

            });
        
        };

function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your intern's id?",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's email?",
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school?",
                }]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                    teamMembers.push(intern);
                    console.log("teamMembers", teamMembers);

                    }) 
            
            };
    
function createTeam() {
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
      ])
      .then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        //     default:
        //         buildTeam();
          }
      });


}
      

// function buildTeam() {
//     fs.writeFile('./dist/template.html', data, (err) => err ? console.log(err) : console.log('Successfully created file!'))


//   }


createManager();
