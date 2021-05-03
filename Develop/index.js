// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "username",
        default: "dcheever88",
        validate: nameInput => {
            if (nameInput.length < 1) {
                return console.log("Please enter valid Github unsername.");
            }
            return true;
        }
    },
    {
    type: "input",
    message: "Please enter the GitHub repository",
    name: "repository",
    validate: repoInput => {
        if (repoInput.length < 1) {
            return console.log("Please enter repository name");
        }
        return true;
    }
    },
    {
        type: "input",
        message: "Please enter your project Title",
        name: "title",
        validate: titleInput => {
            if (titleInput.length < 1) {
                return console.log("Please enter project Title");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please provide a description of your project",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput.length < 1) {
                return console.log("Please enter project description");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please provide steps needed to install your project (for Installation section)",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide any instructions / examples of your project (for Usage section)",
        name: "usage"
    },
    {
        type: "input",
        message: "Please provide guidelines / instructions for how other developers can contribute to your project (for Contributing section)",
        name: "contributing"
    },
    {
        type: "input",
        message: "If necessary, provide any tests for your project and provide examples of how to run them",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: ["MIT License", "GNU GPLv3", "Mozilla Public License 2.0", ""],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated!")
    });
}

const writeTheFile = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
    const userInput = await inquirer.prompt(questions);
    console.log("Your responses:", userInput);
    console.log("Thank you. Fetching GitHub data...");

    const userInfo = await api.getUser(userInput);
    console.log("Your Github user info:", userInfo);

    console.log("Generating your README")
    const markdown = generateMarkdown(userInput, userInfo);
    console.log(markdown);

   await writeTheFile("exampleREADME.md", markdown);
} catch (error) {
    console.log(error);
}
};

// Function call to initialize app
init();
