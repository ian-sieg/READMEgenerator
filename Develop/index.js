// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generate = require('./utils/generateMarkdown');

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

inquirer
    .prompt(questions)
    .then((answers) => {
        const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`

        fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success! Check yo files'));
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
