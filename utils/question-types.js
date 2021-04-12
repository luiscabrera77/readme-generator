// remember: inputs dont require type
class InputQuestion {
  constructor(message, name) {
    this.name = name;
    this.message = message;
  }

  returnString() {
    return JSON.parse(
      `{
        "name" : "${this.name}",
        "message" : "${this.message}"
      }`
    );
  }
}

// we append type and choices for lists... but it doesnt like default!
class ListQuestion extends InputQuestion {
  constructor(message, name, choices) {
    super(message, name);
    this.type = "list";
    this.choices = choices;
  }

  stringifyChoices() {
    return this.choices.join('","');
  }

  returnString() {
    return JSON.parse(
      `{
        "name" : "${this.name}",
        "message" : "${this.message}",
        "type" : "${this.type}",
        "choices" : ["${this.stringifyChoices()}"]
      }`
    );
  }
}

// Export generated questions array
module.exports = {
  InputQuestion: InputQuestion,
  ListQuestion: ListQuestion
};