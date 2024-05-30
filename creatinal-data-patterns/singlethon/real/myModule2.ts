import ConfigManager from "./ConfigManager";

const config2=ConfigManager.getInstatnce()
console.log(config2.getConfig().version)

export default config2