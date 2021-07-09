/*
* @desc 创建模板文件[index.tsx|index.less|draw.ts|data.d.ts]
*/
const fs = require('fs');
const path = require("path");
const logger = require('../logger');
const basePath = path.join(__dirname, '../../template/');
let temps = [`${basePath}index.tsx`, `${basePath}index.less`, `${basePath}draw.ts`, `${basePath}data.d.ts`];
const writePath = 'src';

const add = (cmd) => {
  const { n: name } = cmd;
  if (!fs.existsSync(writePath)) {
    fs.mkdirSync(writePath);
  }
  if (!fs.existsSync(`${writePath}/${name}`)) {
    fs.mkdirSync(`${writePath}/${name}`);
    for (let file of temps) {
      const fileStream = fs.readFileSync(file,'utf8');
      const fileName = path.basename(file);
      fs.writeFileSync(`${writePath}/${name}/${fileName}`, fileStream);
    }
  } else {
    logger.merror(`file ${name} already exist!`)
  }
}

module.exports = add