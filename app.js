// Desired Output per acceptance criteria:
// Title (bagdes)
// Description
// Table of Contents (links)
// Installation 
// Usage
// License 
// Contributing 
// Tests 
// Questions
// - Github username
// - Email
// - Contact Details

const inquirer = require("inquirer")

const startQuestions = () => {
  inquirer.prompt([
    {
      name: "user_github",
      type: "input",
      message: "What is your GitHub username? (Required)",
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
      message: "What is your email? (Required)",
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
      message: "What is the best way to contact you?",
      choices: ['Just Pull Request', 'Write me a detailed email', 'Let\'s have a Zoom first'],
      default: "Just Pull Request",
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
      message: "What is the name of your project? (Required)",
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
      message: "Describe your project? (Required)",
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
      message: "Provide Installation Instructions (Required)",
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
      message: "How to use your Project (Required)",
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
      message: "Guideliness to contribue to your project (Optional)",
    },
    {
      name: "project_test",
      type: "input",
      message: "How to test your Project (Optional)",
    },
    {
      name: "project_license",
      type: "checkbox",
      message: "Choose an Open Source License (Required)",
      // Choices from https://gist.github.com/ulises-jeremias/ebcacbc50c64d4e04bc8b161e2fa44a9
      choices: ['Apache', 'BSD', 'Creative Commons','Eclipse','GNU', 'MIT License', 'Zlib License'],
      default: ["MIT License", "Creative Commons"]
    },
    
  ])
};

startQuestions();
