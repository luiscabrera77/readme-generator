// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// promisify returns responses in a promise object vs a callback function
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// local requirements and exports
const generateReadme = require("./utils/readme-template");
const questions = require("./utils/question-types");
const ListQuestion = questions.ListQuestion;
const InputQuestion = questions.InputQuestion;

// TODO: Create an array of questions for user input
const question1 = new InputQuestion("GitHub username:", "user_github");
const question2 = new InputQuestion("Contact email:", "user_email");
const question3 = new ListQuestion("Best way to engage with you on this project?", "user_contact",['just do a Pull Request', 'write me a detailed email', 'schedule a Zoom call']);
const question4 = new InputQuestion("Project Name:", "project_title");
const question5 = new InputQuestion("Project Description:", "project_description");
const question6 = new InputQuestion("Installation Instructions:", "project_installation");
const question7 = new InputQuestion("How to use the Project:", "project_usage");
const question8 = new InputQuestion("Guideliness to contribue to the project:", "project_contributing");
const question9 = new InputQuestion("How to test Project:", "project_test");
const question10 = new ListQuestion("Select an Open Source License:", "project_license",['ISC', 'GNU/GPL', 'MIT']);

function startQuestions() {
  return inquirer.prompt([
    question1.returnString(), 
    question2.returnString(), 
    question3.returnString(), 
    question4.returnString(), 
    question5.returnString(), 
    question6.returnString(), 
    question7.returnString(), 
    question8.returnString(), 
    question9.returnString(),
    question10.returnString()
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