
const themePath = require('../utils/themePath')

function readTemplate(option, dest) {
    
}

function defaultTheme () {
    const themeSrc = themePath(option.theme)
    return readTemplate(option, themeSrc)
}

function theme (option) {
    // 默认模板
    if (customization === true) {
        option = defaultTheme(option)
    }
    return option
}

module.exports = theme