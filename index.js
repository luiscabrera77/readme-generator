// include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// promisify returns responses in a promise object vs a callback function
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// local requirements and exports
const generateReadme = require("./utils/readme-template");
const questionClasses = require("./utils/question-classes");
const ListQuestion = questionClasses.ListQuestion;
const InputQuestion = questionClasses.InputQuestion;

// create an array of questions for user input
const allQuestions = () => {
  qArray = [];
  qArray.push(new InputQuestion('GitHub username:', 'user_github')),
  qArray.push(new InputQuestion('Contact email:', 'user_email')),
  qArray.push(new ListQuestion('Best way to engage with you on this project?', 'user_contact',['just do a Pull Request', 'write me a detailed email', 'schedule a Zoom call'])),
  qArray.push(new InputQuestion('Project Name:', 'project_title')),
  qArray.push(new InputQuestion('Project Description:', 'project_description')),
  qArray.push(new InputQuestion('Installation Instructions:', 'project_installation')),
  qArray.push(new InputQuestion('How to use the Project:', 'project_usage')),
  qArray.push(new InputQuestion('Guideliness to contribue to the project:', 'project_contributing')),
  qArray.push(new InputQuestion('How to test Project:', 'project_test')),
  qArray.push(new ListQuestion('Select an Open Source License:', 'project_license',['ISC', 'GNU/GPL', 'MIT']))
};

const startQuestions = () => {
  allQuestions();
  return inquirer.prompt(qArray)
};

// create a function to initialize app and write README file
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

// function call to initialize app
init();