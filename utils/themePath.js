
const path = require('path')

function themePath (name) {
    // 加载node_module中的
    console.log('name: ' + name)
    let themeSrc = ''
    try {
        const modulePath = path.resolve(process.cwd(), 'node_modules', name)
        themeSrc = require(modulePath)
    } catch (e) {
        const themeSrc = path.resolve(__dirname, '../node_modules', name)
    }
    return themeSrc
}
module.exports = themePath