import ConfigStore from "configstore";
import pkg from "../package.json" assert { type: "json" };

class keyManager {
  constructor() {
    this.conf = new ConfigStore(pkg.name);
  }
  showkey(){
    const key = this.conf.get("apiKey");
    if (!key)
      throw new Error(
        'No API key set. Use the command "cryptodex key set" to set it.'
      );
    console.log("Your API key is: ".green + key);
  }
  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("apiKey");
    if (!key)
      throw new Error(
        'No API key set. Use the command "cryptodex set" to set it.'
      );
    return key;
  }
  resetKey() {
    const key = this.conf.get("apiKey");
    const e = new Error(
      'No API key set. Use the command "cryptodex key set " to set it',
      {
        exit: 1,
      }
    );
    if (!key) throw e;
    this.conf.delete("apiKey");
    return true;
  }
}

export default keyManager;
