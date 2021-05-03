// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != "none") {
    return `![GitHub license] (https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "") {
    return `n* [License] (#license)n`;
  } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License
    This application is covered under the ${license} license.`;
  } return "";
}

//function to generate markdown for README
function generateMarkdown(userInput, userInfo) {
  let tableOfContents = `
  ## Table of Contents`;

  if (userInput.installation !== "") { tableOfContents += `
    *   ${installation(userInput.installation)}
  ` };
  
  if (userInput.usage !== "") { tableOfContents += `
    *   ${usage(userInput.usage)}
  ` };

  if (userInput.contributing !== "") { tableOfContents += `
    *   ${contributing(userInput.contributing)}
  ` };

  if (userInput.tests !== "") { tableOfContents += `
    *   ${tests(userInput.tests)}
  ` };

  let draftMarkdown =
  `# ${userInput.title}
  
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.repository}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userInput.username}/${userInput.repository}?style=flat&logo=appveyor)
  

  ## Description

  ${userInput.description}
`

draftMarkdown += tableOfContents;

draftMarkdown += `
    * [License] (#license)`;

if (userInput.installation !== "") {

  draftMarkdown +=
  `
  ## Installation

  *How to install project:*

  ${userInput.installation}`
};

if (userInput.usage !== "") {

  draftMarkdown +=

  `
  ## Usage

  *How to use:*

  ${userInput.usage}`
};

if (userInput.contributing !== "") {
`
## Contributing

*If you would like to contribute to this project, please follow these guidelines:*

${userInput.contributing}`
};

if (userInput.tests !== "") {

  draftMarkdown +=
  `
  ## Tests

  *Tests for this application:*

  ${userInput.tests}`
};

draftMarkdown +=
`
  ## License

${userInput.license}`;

let draftDev =
`
-----------------
  ## Questions?

Questions or comments? Please contact me at:

GitHub: [@${userInfo.login}](${userInfo.url})


Email: ${userInput.email}`;

  draftMarkdown += draftDev;

  return draftMarkdown;
}

module.exports = generateMarkdown;

