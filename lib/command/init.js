const inquirer = require('inquirer');


const questions = [
  {
    type: 'confirm',
    name: 'appetizer',
    message: 'Do you think i am handsome?',
    default: true,
  },
  {
    type: 'list',
    name: 'project',
    message: 'What project do you need?',
    choices: ['todoList', 'qiankun', 'myFirstReact'],
    filter(val) {
      return val.toLowerCase();
    }
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});