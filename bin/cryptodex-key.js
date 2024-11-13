const { program } = require("commander");
const key = require("../commands/key.js");

program
  .command("set")
  .description("Set API key -- Get it at https://pro.coinmarketcap.com/")
  .action(key.set);
program.command("rev").description("Remove API key ").action(key.remove);
program.command("get").description("Get API key ").action(key.get);
program.command("show").description("Show API key ").action(key.show);

program.parse(process.argv);
