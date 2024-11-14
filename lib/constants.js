import axios from "axios";
import colors from "colors";

class cryptAPI {
  constructor(apikey) {
    this.apiKey = apikey;
    this.baseUrl = `https://coinlib.io/api/v1/coin`;
  }

  async getPriceData(coin, curr) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&pref=${curr}&symbol=${coin}`
      );
      if(!res) throw error;
      
    } catch (error) {
      console.error(err.message);
    }
  }
}
