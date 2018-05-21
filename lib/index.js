
const config = require('./config')
const chapters = require('./chapters')
const theme = require('./theme')
const copy = require('./copy')
const page = require('./page')
const { log } = require('./utils')

function aldoc(option) {
    console.log('[begin] build docs')
    option = config(option)
    option = chapters(option)
    option = theme(option)
    console.log(option)
    // 将模板资源文件copy到发布目录
    option = copy(option)
    page(option)
    console.log('[end] build docs')
    return option
}

module.exports = aldoc