/*
 * @desc 创建模板文件[index.tsx|index.less|draw.ts|data.d.ts]
 */
const fs = require("fs");
const path = require("path");
const logger = require("../logger");
const basePath = path.join(__dirname, "../../template/");
let temps = [
  `${basePath}index.tsx`,
  `${basePath}index.less`,
  `${basePath}services.ts`,
  `${basePath}data.d.ts`,
];

const add = ({ name, path: writePath = "src" }) => {
  if (!fs.existsSync(writePath)) {
    const paths = writePath.split("/");
    if (paths.length > 1) {
      let finalPath = "";
      console.log("paths", paths);
      for (const path of paths) {
        finalPath = finalPath + path + "/";
        if (!fs.existsSync(finalPath)) {
          fs.mkdirSync(finalPath);
        }
      }
    } else {
      fs.mkdirSync(paths[0]);
    }
  }
  if (!fs.existsSync(`${writePath}/${name}`)) {
    fs.mkdirSync(`${writePath}/${name}`);
    for (let file of temps) {
      const fileStream = fs.readFileSync(file, "utf8");
      const fileName = path.basename(file);
      fs.writeFileSync(`${writePath}/${name}/${fileName}`, fileStream);
    }
  } else {
    logger.merror(`file ${name} already exist!`);
  }
};

module.exports = add;
