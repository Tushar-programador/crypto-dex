import { program } from "commander";
import check from "../commands/check.js";

program
  .command("price")
  .description("check price of crypto")
  .option("--coin <type>", "Add Specific coin in CSV format", "BTC,ETH,XRP ")
  .option("--cur <type>", "Change currency of coins", "USD")
  .action((cmd) => check.price(cmd));

program
  .command("top")
  .description("check top 100 crypto")
  .action(() => check.top());

program.parse(process.argv);
