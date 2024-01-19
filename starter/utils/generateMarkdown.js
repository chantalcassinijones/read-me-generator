// function to generate markdown for README
function generateMarkdown(data) {
  return `# <Your-Project-Title> ${data.title}
  ## Description ${data.description}
  ## Table of Contents: 
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
  ## Installation ${data.installation}
  ## Usage ${data.usage}
  ## Licence ${data.licence}
  ## Contributing ${data.contribution}
  ## Tests ${data.tests}
  ## Questions ${data.github} ${data.email}


`;
}
//const util = require('util');
//const writeFileAsync = util.promisify(fs.writeFile);
//module.exports = generateMarkdown;
// .then((data) => generateMarkdown(data));

// questions()
//   .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));
//make badges function and links for licence









