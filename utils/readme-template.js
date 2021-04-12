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

// function & literal
function generateMarkdown(info) {
  return `

# ${info.project_title}

## Summary
![badge](https://img.shields.io/badge/license-${info.project_license}-blue)<br />
${info.project_description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${info.project_installation}

## Usage
${info.project_usage}

## License
This application is covered by the ${info.project_license} license. 
<br />
![badge](https://img.shields.io/badge/license-${info.project_license}-blue)

## Tests
${info.project_test}

## Questions
Follow me on Github: [${info.user_github}](https://github.com/${info.user_github})
<br />
The best way to contact me is to: ${info.user_contact} 
<br />
Happy coding!
${info.user_email}
`;
}

module.exports = generateMarkdown;