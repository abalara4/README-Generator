// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './Develop/utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
        },
        {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
        },
        {
        type: 'list',
        name: 'license',
        message: 'What license is used for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
