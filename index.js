const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
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
    name: "build",
    message: "What tehnologies have you used to build this project?"
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
    type: "input",
    name: "twitter",
    message: "Please provide your Twitter username:"
  },
  
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT License", "Apache License", "GNU General Public License", "None"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
