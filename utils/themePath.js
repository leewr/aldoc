
const path = require('path')

function themePath (name) {
    // 加载node_module中的
    let themeSrc = ''
    try {
        const modulePath = path.resolve(process.cwd(), 'node_modules', 'aldoc-theme-' + name)
        themeSrc = require(modulePath)
    } catch (e) {
        const modulePath = path.resolve(process.cwd(), '../node_modules', 'aldoc-theme-' + name)
    }
}
module.exports = themePath