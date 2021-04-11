const inquirer = require("inquirer")
const ratingArray = ["Horrible", "Not Great", "Meh", "Good", "Amazing"]

const startQuestions = () => {
  inquirer.prompt([
    {
      name: "user_name",
      type: "input",
      message: "What is your name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a name!');
          //startQuestions();
          return false;
        }
      }
    },
    {
      name: "user_age",
      type: "number",
      message: "How old are you?",
      validate: ageInput => {
        if (!ageInput) {
          console.log('You need to enter your age!');
          return false;
        } else {
          return true;
        }
      }
    }])
};

startQuestions();