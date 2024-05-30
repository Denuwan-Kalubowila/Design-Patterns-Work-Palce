import ConfigManager from "./ConfigManager";

const config1=ConfigManager.getInstatnce()
console.log(config1.getConfig().appName)

export default config1