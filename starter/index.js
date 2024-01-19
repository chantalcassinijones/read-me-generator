const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project name?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What are the usage informations?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions?",
    },
    {
      type: "list",
      name: "licence",
      message: "Please, choose a license:",
      choices: [
        "MIT",
        "ISC",
        "Academic Free License v3.0",
        "Artistic license 2.0",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub name:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address:",
    },
  ]);

//questions();

// function to write README file
//function writeToFile(fileName, generateMarkdown (data)) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
