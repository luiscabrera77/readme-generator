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

// MISSING BADGES....![badge](https://img.shields.io/badge/license-${info.project_license}-blue)<br />

function generateMarkdown(info) {
  return `

# ${info.project_title}

## Description
${info.project_description}

## Table of Contents
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

## Contributing
If you would like to contribute to this project, please keep in mind:
<br />
${info.project_contributing}. 

## Tests
${info.project_test}

## Questions
Find me on Github as: [${info.user_github}](https://github.com/${info.user_github})
<br />
The best way to contact me is to: ${info.user_contact} 
<br />
Happy coding!
${info.user_email} (mailto:${info.user_email})
`;
}

module.exports = generateMarkdown;