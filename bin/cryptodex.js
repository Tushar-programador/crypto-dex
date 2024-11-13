#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");
console.log("Starting ....");
// console.log(process.argv); // console commands
program
  .version(pkg.version)
  .command("key", " manage API key -- https://pro.coinmarketcap.com")
  .parse(process.argv);

