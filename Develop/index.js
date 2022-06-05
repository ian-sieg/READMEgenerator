// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What's your name?",
        name: 'name',
    },
    {
        type: 'list',
        message: 'Favorite turtle?',
        name: 'turtles',
        choices: ['round', 'blue', 'sea', 'ocean']
    }
];

inquirer
    .prompt(questions)
    .then((response) => {
        const filename = `${response.name.toLowerCase().split(' ').join('')}.md`

        fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success! Check yo files'));
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
