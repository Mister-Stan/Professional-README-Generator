const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project:"
  },

  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:"
  },

  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions:"
  },

  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines:"
  },

  {
    type: "input",
    name: "tests",
    message: "Please provide testing instructions:"
  },
 
  {
    type: "input",
    name: "github",
    message: "Please provide your gitHub username:"
  },

  {
    type: "input",
    name: "email",
    message: "Please provide your email adrress:"
  },
 
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache", "GNU General Public", "None"],
  },
];

function writeDataDynamically(fileName, answers) {
  fs.writeFile(fileName, answers, function (err) {
    if (err) {
      return console.error("Error!");
    } else {
      return console.log("Success!");
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeDataDynamically("README.md", markdown);
  });
}

init();
