
const fs = require('fs-extra')
const yaml = require('js-yaml')
const path = require('path')
const USERCONFIGFILE = 'aldoc.yml'
const DEFAULTCONFIG = '../aldoc.yml.default'
function config(option) {
    // 用户文件是否存在
    let userConfigExists
    try {
        fs.accessSync(path.resolve(process.cwd(), USERCONFIGFILE))
        console.log('success')
        userConfigExists = true
    } catch (e) {
        console.log('error')
        userConfigExists = false
    }
    // 阅读文件
    let jsonContent
    let configContent
    if (userConfigExists) {
        configContent = fs.readFileSync(path.resolve(process.cwd(), USERCONFIGFILE), 'utf8')
    } else {
        configContent = fs.readFileSync(path.resolve(__dirname, DEFAULTCONFIG), 'utf8')
        // console.log(configContent)
    }
    try {
        jsonContent = yaml.safeLoad(configContent, 'utf8')
        console.log(jsonContent.dir)
    } catch (e) {
        console.log(e)
    }
    // 合并option
    // 不存在采用默认设置
    if (userConfigExists) {
        try {
            fs.readFileSync(path.resolve(process.cwd(), DEFAULTCONFIG))
        } catch (e) {
            console.log('error')
        }
    }
    // 版本参数更新
    console.log('config: ' + jsonContent)
    return jsonContent
}

module.exports = config