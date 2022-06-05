// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generate = require('./utils/generateMarkdown');

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
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
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
        message: 'Please provide installation instructions or hit enter if there are none',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions or hit enter if there are none',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions on how to contribute to this project or hit enter if there are none',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your project or hit enter if there are none',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readMeContent = generateMarkdown(data)
    
    fs.writeFile(fileName, readMeContent, (err) =>
        err ? console.log(err) : console.log('Success! Check yo files')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((ans) => {
        const fileName = `${ans.title.toLowerCase().split(' ').join('')}.md`;
        const data = ans
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
