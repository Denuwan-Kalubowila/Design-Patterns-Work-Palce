import * as fs from 'fs'
interface Config{
    appName:string;
    version:string;
    apiBaseUrl:string;
}

class ConfigManager{
    private static instance:ConfigManager;
    private config:Config;

    private constructor(){
        const data=fs.readFileSync('confi.json','utf-8')
        this.config=JSON.parse(data)
    }

    public static getInstatnce():ConfigManager{
        if (!ConfigManager.instance){
            ConfigManager.instance= new ConfigManager()
        }
        return ConfigManager.instance
    }

    public getConfig():Config{
        return this.config
    }
}

const configManager1=ConfigManager.getInstatnce()
const configManager2= ConfigManager.getInstatnce()

console.log(configManager1 === configManager2)

console.log(configManager1.getConfig().apiBaseUrl)
console.log(configManager1.getConfig().appName)
console.log(configManager1.getConfig().version)

export default ConfigManager