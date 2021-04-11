// GIVEN a command-line application that accepts user input
// then we use inquirer
const inquirer = require("inquirer")

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
      type: "list",
      message: "Choose an Open Source License (Required)",
      choices: ['MIT', 'GNU GPLv3', 'ISC License'],
      default: "MIT"
    },
    
  ])
};

startQuestions();
