import KeyManager from "../lib/KeyManager.js";
import color from "colors";
import Inquirer from "inquirer";
import isRequire from "../utils/validation.js";

const key = {
  show() {
    try {
      const keyManager = new KeyManager();
      console.log("Your API key is: ".blue + keyManager.getKey());
    } catch (error) {
      console.error(error.message.red);
    }
  },
  async set() {
    const keyManager = new KeyManager();
    const input = await Inquirer.prompt([
      {
        type: "input",
        name: "apiKey",
        message: "Enter your CoinMarketCap API key".green + " ",
        validate: isRequire,
      },
    ]);

    const key = keyManager.setKey(input.apiKey);
    if (key) {
      console.log("API key set successfully".blue);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.resetKey();
      console.log("API key removed successfully".blue);
    } catch (e) {
      console.error(e.message.red);
    }
  },
  get() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Your API key is: ".blue + key);
    } catch (error) {
      console.error(error.message.red);
    }
    console.log("get api");
  },
};
export default key;
