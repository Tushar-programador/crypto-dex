import axios from "axios";
import color from "colors";
import {
  allCryptoPrice,
  singleCryptoPrice,
  multiCryptoPrice,
} from "../lib/constants.js";
const check = {
  price(cmd) {
    let response = null;
    new Promise(async (resolve, reject) => {
      try {
        response = await axios.get(allCryptoPrice);
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }
      if (response) {
        // success
        const data = response.data.coins;
        data.map((coins) => {
          console.log(`Coin Name: ${coins.name} | Price: ${coins.price}`);
        });
        resolve(data);
      }
    });
  },
  top() {
    // Check the top 10 coins
    console.log("Checking.. top coins");
  },
};

export default check;
