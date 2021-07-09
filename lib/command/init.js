const inquirer = require("inquirer");
const ora = require("ora");
const { exec } = require("child_process");
const projects = {
  todolist: "git@github.com:ImDaret/todoList.git",
  qiankun: "git@github.com:ImDaret/qiankun.git",
  "ant design pro": "git@github.com:ant-design/ant-design-pro.git",
};

const init = () => {
  const questions = [
    {
      type: "confirm",
      name: "appetizer",
      message: "Do you think i am handsome?",
      default: true,
    },
    {
      type: "list",
      name: "project",
      message: "What project do you need?",
      choices: ["todoList", "qiankun", "ant design pro"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const spinner = ora("waiting").start();
    const cmd = `git clone ${projects[answers.project]}`;
    exec(cmd, (err) => {
      if (!err) {
        spinner.succeed("success");
      }
    });
  });
};

module.exports = init;
