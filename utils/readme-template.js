const licenseMIT = `
MIT License Copyright
(view most recent version at https://spdx.org/licenses/MIT.html)

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
`;

const licenseISC = `
ISC License
(view most recent version at https://spdx.org/licenses/ISC.html)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`;

const licenseGNUGPL = `
GNU General Public License v3.0
(view most recent AND FULL version at https://spdx.org/licenses/GPL-3.0-or-later.html)

Permissions of this strong copyleft license are conditioned on making 
available complete source code of licensed works and modifications, 
which include larger works using a licensed work, under the same license. 

Copyright and license notices must be preserved. Contributors provide 
an express grant of patent rights.
`;

function generateMarkdown(info) {

  if (info.project_license == 'MIT') {
    licenseDetail = licenseMIT;
  }
  else if (info.project_license == 'ISC') {
    licenseDetail = licenseISC;
  }
  else {
    licenseDetail = licenseGNUGPL;
  }

  return `

# ${info.project_title}

## Description
![badge](https://img.shields.io/badge/license-${info.project_license}-blue)

${info.project_description}

![Screenshot](copy here URL of your app screenshot)

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
${licenseDetail}

## Contributing
If you would like to contribute to this project:

**${info.project_contributing}**

## Tests
${info.project_test}

## Questions
Find me on Github as: [${info.user_github}](https://github.com/${info.user_github})

The best way to engage with me in this project is to ${info.user_contact}. 

Happy coding!

${info.user_email}
`;
}

module.exports = generateMarkdown;