// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { if (value) { return true } else { return 'Please enter a title for your project.' } }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: (value) => { if (value) { return true } else { return 'Please enter a description for your project.' } }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue.' } }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
        validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue.' } }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
        validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue.' } }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
        validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue.' } }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        validate: (value) => { if (value) { return true } else { return 'Please choose one to continue.' } }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Please provide your name.',
        validate: (value) => { if (value) { return true } else { return 'Please enter your name to continue.' } }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
        validate: (value) => { if (value) { return true } else { return 'Please enter your Github username to continue.' } }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
        validate: (value) => { if (value) { return true } else { return 'Please enter your email address to continue.' } }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please provide the link to your GitHub repository.',
        validate: (value) => { if (value) { return true } else { return 'Please provide a link to your repository to continue.' } }
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please provide the URL to your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide a link to continue.' } }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! README has been created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();