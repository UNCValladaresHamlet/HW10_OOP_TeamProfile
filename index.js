const inquirer = require('inquirer'); 
const fs = require('fs');

const teamMembers = [];
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
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
            createTeam();
            generateManagerHTML(manager);
            
            // const htmlContent = generateHTML(answers);
            // console.log("htmlContent:", htmlContent)

                });
            };


const generateManagerHTML = (manager) => {
    const managerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </body>
    </html>`;
        fs.writeFileSync('./dist/sample.html', managerHTML , (err) => err ? console.log(err) : console.log('Successfully created file!'))

                // console.log('managerHTML:', managerHTML)
};


function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?",
            }]).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)        
                teamMembers.push(engineer);
                generateEngineerHTML(engineer);
                createTeam();

            });
        
        };

const generateEngineerHTML = (engineer) => {
            const html2 = `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
            fs.appendFile('./dist/sample.html', html2, (err) => err ? console.log(err) : '')
        };


// function addIntern() {
//             inquirer.prompt([
//                 {
//                     type: "input",
//                     name: "name",
//                     message: "What is your intern's name?",
//                 },
//                 {
//                     type: "input",
//                     name: "id",
//                     message: "What is your intern's id?",
//                 },
//                 {
//                     type: "input",
//                     name: "email",
//                     message: "What is your intern's email?",
//                 },
//                 {
//                     type: "input",
//                     name: "school",
//                     message: "What is your intern's school?",
//                 }]).then(answers => {
//                     const intern = new Intern(answers.name, answers.id, answers.email, answers.school)            
//                     teamMembers.push(intern);
//                     generateInternHTML(intern);

//                     }) 
            
//             };

//             const generateInternHTML = (intern) => {
//                 const html3 = `
//                 <div class="card employee-card">
//                 <div class="card-header">
//                     <h2 class="card-title">${intern.getName()}</h2>
//                     <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
//                 </div>
//                 <div class="card-body">
//                     <ul class="list-group">
//                         <li class="list-group-item">ID: ${intern.getId()}</li>
//                         <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
//                         <li class="list-group-item">School: ${intern.getSchool()}</li>
//                     </ul>
//                 </div>
//             </div>`
//             fs.appendFile('./dist/sample.html', html3, (err) => err ? console.log(err) : '')
//             };

    
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
            // case "Intern":
            //     addIntern();
            //     break;
            // default:
          }
      });


}

createManager();
