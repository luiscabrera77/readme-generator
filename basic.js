// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/readme-template");
// promisify returns responses in a promise object vs a callback function
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function startQuestions() {
  return inquirer.prompt([
    {
      name: "user_github",
      type: "input",
      message: "GitHub username (Required):",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a username');
          return false;
        }
      }
    },
    {
      name: "user_email",
      type: "input",
      message: "Contact email (Required):",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter an email');
          return false;
        }
      }
    },
    {
      name: "user_contact",
      type: "list",
      message: "Best way to engage with you on this project?",
      choices: ['just do a Pull Request', 'write me a detailed email', 'schedule a Zoom call'],
      default: "just do a Pull Request",
      validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
          console.log('You need to specify contact instructions.');
          return false;
        }
      }
    },
    {
      name: "project_title",
      type: "input",
      message: "Project Name (Required):",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a project title.');
          return false;
        }
      }
    },
    {
      name: "project_description",
      type: "input",
      message: "Project Description (Required):",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project title.');
          return false;
        }
      }
    },
    {
      name: "project_installation",
      type: "input",
      message: "Installation Instructions (Required):",
      validate: instructionsInput => {
        if (instructionsInput) {
          return true;
        } else {
          console.log('You need to enter installation instructions.');
          return false;
        }
      }
    },
    {
      name: "project_usage",
      type: "input",
      message: "How to use the Project (Required):",
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You need to enter usage instructions.');
          return false;
        }
      }
    },
    {
      name: "project_contributing",
      type: "input",
      message: "Guideliness to contribue to the project (Optional)",
    },
    {
      name: "project_test",
      type: "input",
      message: "How to test your Project (Optional)",
    },
    {
      name: "project_license",
      type: "list",
      message: "Select an Open Source License (Required):",
      // Choices from https://gist.github.com/ulises-jeremias/ebcacbc50c64d4e04bc8b161e2fa44a9
      choices: ['ISC', 'GNU/GPL', 'MIT'],
      default: 'MIT'
    },
  ])
};

// TODO: Create a function to initialize app and write README file
async function init() {
  try {
      const info = await startQuestions();
      const generateContent = generateReadme(info);
      await writeFileAsync('./src/README.md', generateContent);
      console.log('README succesfully generated.');
  } catch (err) {
      console.log(err);
  }
}

// Function call to initialize app
init();