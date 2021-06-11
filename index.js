const inquirer = require('inquirer');  //collecting user input
const fs = require('fs'); //writing to file system

const teamMembers = []; //declared teamMembers and set that to a empty array to capture the employee input from user

const Manager = require("./lib/Manager")  
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")
//Import Module using require()
//To include a module, use the require() function with the name of the module:


//function appStart that will start the prompt questions for user
//Wrote inquirer questions for Manager, Engineer, and Intern


//New keyword in JavaScript is used to create an instance of an object that has a constructor function.
//The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
//Manager variable imported above stores the name, id, email, officenumber given by USER RESPONSES for later use.
//Push method is used store Manager's objects into teamMember array that is declared an empty array above


function appStart() {
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

                });
            };


//GenerateManagerHTML produces HTML markup for Manager information that is given by user input
//variable is assigned a string that will be used to make output HTML.
//fs.writeFileSync - creates a new file if the specified data does not exist.

//EXAMPLE of how write fs.writeFileSync :
//fs.writefilesync("destination folder", variable we defined as string that has output HTML, (err) => err ? console.log(err) : '')


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
            <div class="team-area col-12 d-flex justify-content-center">
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
        
`;
        fs.writeFileSync('./output/team.html', managerHTML , (err) => err ? console.log(err) : console.log('Successfully created file!'))

};

//If user chooses to "add team member" and chooses Engineer then the addEngineer function is invoked to capture USER RESPONSES about the Engineer.
//Engineer variable imported above stores the name, id, email, github given by USER RESPONSES for later use.
//Push method is used store Engineers's objects into teamMember array that is declared an empty array above.

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

//GenerateEngineerHTML produces HTML markup for Engineer information that is given by user input
//variable is assigned a string that will be used to make output HTML.
//The fs.appendFile() method is used to asynchronously append the given data to a file. A new file is created if it does not exist.

//EXAMPLE of how write fs.appendFile() :
//fs.appendFile("destination folder", variable we defined as string that has output HTML, (err) => err ? console.log(err) : '')

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
        </div>
        
        `
            fs.appendFile('./output/team.html', html2, (err) => err ? console.log(err) : '')
        };


//If user chooses to "add team member" and chooses Intern then the addIntern function is invoked to capture USER RESPONSES about the Intern.
//Intern variable imported above stores the name, id, email, school given by USER RESPONSES for later use.
//Push method is used store Intern's objects into teamMember array that is declared an empty array above.

function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your intern's name?",
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your intern's id?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your intern's email?",
                },
                {
                    type: "input",
                    name: "school",
                    message: "What is your intern's school?",
                }]).then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)            
                    teamMembers.push(intern);
                    generateInternHTML(intern);
                    createTeam();

                    }) 
            
            };

//GenerateInternHTML produces HTML markup for Intern information that is given by user input
//variable is assigned a string that will be used to make output HTMl.
//The fs.appendFile() method is used to asynchronously append the given data to a file. A new file is created if it does not exist.

//EXAMPLE of how write fs.appendFile() :
//fs.appendFile("destination folder", variable we defined as string that has output HTML, (err) => err ? console.log(err) : '')


const generateInternHTML = (intern) => {
    const html3 = `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
            fs.appendFile('./output/team.html', html3, (err) => err ? console.log(err) : '')
            };

//generateBottom functions adds the ending syntax to the output HTML.

generateBottom = () => {

const bottomHTML =`
    </div>
</body>
</html>
`
            fs.appendFile('./output/team.html', bottomHTML, (err) => err ? console.log(err) : '')
};


//After input is given for employee this createTeam function runs.
//This allows the user to choose which type of employee they want to add (Intern or Engineer).
//Switch statement is created to either add an employee (run addIntern/addEngineer) or by default generate output HTML.
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
            default:
                generateBottom();
                console.log('Successfully Created Team File!')          }
      });
}
createManager(); //function invoked to run first (manager questions get asked first)
}
appStart();
