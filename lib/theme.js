
const themePath = require('../utils/themePath')
const fs = require('fs-extra')
const path = require('path')
const walkSync = require('walk-sync')
const ejs = require('ejs')

function readTemplate(option, dest) {
    const pathArr = walkSync(path.resolve(dest), {
        globs: ['*.ejs'],
        directives: false
    })
    pathArr.forEach(function (item) {
        const pageTemplate = fs.readFileSync(path.resolve(dest, item), 'utf8')
        if (!option.templates) option.templates = {}
        option.templates[item.substr(0, item.length - 4)] = ejs.compile(pageTemplate, {
        })
        console.log(option.templates[item.substr(0, item.length - 4)]({title: 111}))
    })
    return option
}

function defaultTheme (option) {
    console.log(option.theme)
    const themeSrc = themePath(option.theme)
    console.log('themeSrc: ' + themeSrc)
    return readTemplate(option, themeSrc)
}

function theme (option) {
    const { customization } = option
    // 默认模板
    if (customization === false) {
        option = defaultTheme(option)
    }
    console.log('option: ' + option)
    return option
}

module.exports = theme