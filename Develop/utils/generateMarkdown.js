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
    * [Installation] (#installation)` };
  
  if (userInput.usage !== "") { tableOfContents += `
    * [Usage] (#usage)` };

  if (userInput.contributing !== "") { tableOfContents += `
    * [Contributing] (#contributing)` };

  if (userInput.tests !== "") { tableOfContents += `
    * [Tests] (#tests)` };

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

![Developer Profile Pic] (${userInfo.avatar_url})

Questions or comments? Please contact me at:

GitHub: [@${userInfo.login}](${userInfo.url})
`;

if (userInfo.email !== null) {
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  draftMarkdown += draftDev;

  return draftMarkdown;
}

module.exports = generateMarkdown;

