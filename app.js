const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//const { get } = require("http");

const teamMembers = [];

// function init() {
// use inquirer.prompt to get information on the manager for the team you're trying to create.

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextEmployee",
        message: "what role is next employee going to do",
        choices: ["engineer", "intern", "none"],
      },
    ])
    .then((usersAnswer) => {
      if (usersAnswer.nextEmployee === "engineer") {
        createEngineer();
      } else if (usersAnswer.nextEmployee === "intern") {
        createIntern();
      } else {
        createOtherTeamMembers()
      }
    });
};

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "please enter name",
  },
  {
    type: "input",
    name: "id",
    message: "what is your id",
  },
  {
    type: "input",
    name: "email",
    message: "please enter your email address",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "what is your office number",
  },
];

inquirer.prompt(managerQuestions).then((usersAnswers) => {
  const newManager = new Manager(
    usersAnswers.managerName,
    usersAnswers.id,
    usersAnswers.email,
    usersAnswers.officeNumber
  );
  teamMembers.push(newManager);
  console.log(teamMembers);
  createTeam();
});

// Write code to use inquirer to gather information about the development team members,
function createEngineer() {
  const EngineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "please enter name",
    },
    {
      type: "input",
      name: "id",
      message: "what is your id",
    },
    {
      type: "input",
      name: "email",
      message: "please enter your email address",
    },
    {
      type: "input",
      name: "gitHub",
      message: "please enter your Github details",
    },
  ];
  inquirer.prompt(EngineerQuestions).then((usersAnswers) => {
    const newEngineer = new Engineer(
      usersAnswers.name,
      usersAnswers.id,
      usersAnswers.email,
      usersAnswers.gitHub
    );

    teamMembers.push(newEngineer);
    console.log(teamMembers);
    createTeam();
  });
}

function createIntern() {
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "please enter name",
    },
    {
      type: "input",
      name: "id",
      message: "what is your id",
    },
    {
      type: "input",
      name: "email",
      message: "please enter your email address",
    },
    {
      type: "input",
      name: "school",
      message: "please enter your school details",
    },
  ];

  inquirer.prompt(internQuestions).then(
    (usersAnswers) => {
      const newIntern = new Intern(
        usersAnswers.name,
        usersAnswers.id,
        usersAnswers.email,
        usersAnswers.school
      );
      teamMembers.push(newIntern);
      createTeam();
    });
}

      //  creates the file using fs synchronously

        function createOtherTeamMembers() {
          if (fs.existsSync(OUTPUT_DIR) === false) {
            fs.mkdirSync(OUTPUT_DIR);
          }
          fs.writeFileSync(outputPath, render(teamMembers));
        }
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

//   function renderhtml() {

//   app.get("/", function (req, res) {
//       res.sendFile(path.join(__dirname, "main.html"));
//    });
//    app.get("/manager", function (req, res) {
//     res.sendFile(path.join(__dirname, "manager.html"));
//    });
//    app.get("/engineer", function (req, res) {
//     res.sendFile(path.join(__dirname, "engineer.html"));
//   });
//  app.get("/intern", function (req, res) {
//     res.sendFile(path.join(__dirname, "intern.html"));
//   });

//console.log(teamMembers);
//}
//})
//getTeamManagerDetails();
//}
// getTeamManagerDetails();
//init();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
