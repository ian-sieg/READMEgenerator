// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: (ans) => {
            if(ans !== '') {
                return true;
            } else {
                console.error('Your username cannot be blank');
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (ans) => {
            if(ans !== '') {
                return true;
            } else {
                console.error('Your email cannot be blank');
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (ans) => {
            if(ans !== '') {
                return true;
            } else {
                console.error('Your project title cannot be blank');
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: (ans) => {
            if(ans !== '') {
                return true;
            } else {
                console.error('Your project description cannot be blank');
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions. Or hit enter if there are none:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions. Or hit enter if there are none:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide instructions on how to contribute to this project. Or hit enter if there are none:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your project. Or hit enter if there are none:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'none'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success! Check your files')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((ans) => {
        const fileName = `${ans.title.toUpperCase().split(' ').join('-')}-README.md`;
        const data = ans
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
