const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Arrow function to generate questions using enquirer.prompt
const generateQuestions = () =>
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
      type: "list",
      name: "license",
      message: "Please, choose a license:",
      choices: [
        "MIT",
        "ISC",
        "Apache License 2.0",
        "GNU General Public License",
      ],
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

  //Function for async/await syntax to make application run smoother 
const init = async () => {
  try {
    const data = await generateQuestions();
    await writeFileAsync("README.md", generateMarkdown(data));
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.error("Error writing to README.md:", err); //if there is any errors 
    process.exit(1); //exit if there is errors
  }
}

// Call the function
init();