// function to generate markdown for README
function generateMarkdown(data) {
  return `# <Your-Project-Title> \n ${data.title}
  ## Description \n ${data.description}
  ## Table of Contents: 
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
  ## Installation \n ${data.installation}
  ## Usage \n ${data.usage}
  ## Licence \n ${data.licence}
  ## Contributing \n ${data.contribution}
  ## Tests \n ${data.tests}
  ## Questions \n ${data.github} ${data.email}


`;
}

module.exports = generateMarkdown;

//make badges function and links for licence
