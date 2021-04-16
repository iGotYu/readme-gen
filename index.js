// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Briefly describe your Project?",
    name: "description",
  },
  {
    type: "list",
    message: "Choose your License for this project",
    name: "license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"],
  },
  {
    type: "input",
    message: "What is the instillation process?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the purpose of this application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Name a couple contributors of this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How would you run this test?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "what is your email address?",
    name: "email",
  },
];

//use inquirer
inquirer.prompt(questions).then((answers) => {
  fs.writeFileSync(
    path.join(process.cwd(), "ReadMe.md"),
    generateMarkdown(answers)
  );
});
