#!/usr/bin/env node

import { program } from "commander";
import pkg from "../package.json" assert { type: "json" };
console.log("Starting ....");
// console.log(process.argv); // console commands
program
  .version(pkg.version)
  .command("key", " manage API key -- https://pro.coinmarketcap.com")
  .command("check", "Check the crypto price")
  .parse(process.argv);
