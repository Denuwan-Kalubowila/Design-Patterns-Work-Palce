import {expect} from 'chai'
import ConfigManager from '../ConfigManager'
import { describe, it } from 'node:test'

describe("ConfigureMng Sigleton",()=>{
    it('should return same instance',()=>{
        const mng1=ConfigManager.getInstatnce()
        const mng2=ConfigManager.getInstatnce()

        expect(mng1).to.equal(mng2)
    });
    it ("should load configuration settings",()=>{
        const mng=ConfigManager.getInstatnce()
        const config=mng.getConfig()
        expect(config.appName).to.equal('My Awesome Application');
        expect(config.version).to.equal('1.0.0');
        expect(config.apiBaseUrl).to.equal('https://api.example.com');
    })
})