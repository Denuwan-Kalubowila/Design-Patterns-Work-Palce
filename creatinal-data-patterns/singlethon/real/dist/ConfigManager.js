"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ConfigManager {
    constructor() {
        const data = fs_1.default.readFileSync('confi.json', 'utf-8');
        this.config = JSON.parse(data);
    }
    static getInstatnce() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    getConfig() {
        return this.config;
    }
}
const configManager1 = ConfigManager.getInstatnce();
const configManager2 = ConfigManager.getInstatnce();
console.log(configManager1 === configManager2);
console.log(configManager1.getConfig().apiBaseUrl);
console.log(configManager1.getConfig().appName);
console.log(configManager1.getConfig().version);
//# sourceMappingURL=ConfigManager.js.map