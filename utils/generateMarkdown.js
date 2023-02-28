function generateMarkdown(answers) {

  let licenseBadge = '';

  switch (answers.license) {
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'None':
      break;
    default:
      break;
  }

  return `# ${answers.title}
  ${licenseBadge}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  This project is licensed under the ${answers.license} license.

  ## Questions
  If you have any questions, please feel free to contact me at ${answers.email}. You can also find more of my work at [${answers.github}](https://github.com/${answers.github}/).
`;
}

module.exports = generateMarkdown;

