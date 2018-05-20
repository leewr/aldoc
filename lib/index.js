
const config = require('./config')
const chapters = require('./chapters')
const theme = require('./theme')
const { log } = require('./utils')

function aldoc(option) {
    console.log('[begin] build docs')
    option = config(option)
    option = chapters(option)
    option = theme(option)
    // option = copy(option)
    // page(option)
    console.log('[end] build docs')
    return option
}

module.exports = aldoc