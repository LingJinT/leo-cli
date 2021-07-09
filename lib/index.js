const program = require("commander");
const pkg = require("../package.json");
const { init, add } = require("./command");

program.version(pkg.version).usage("<command>");

program.command("init").alias("i").description("init project").action(init);

program.command("add").alias("a").description("add page template").action(add);

program.parse(process.argv);
