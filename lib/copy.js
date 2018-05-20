const themePath = require('../utils/themePath')
const fs = require('fs-extra')
const path = require('path')
const walkSync = require('walk-sync')

function copy (option) {
    const themeSrc = themePath(option.theme)
    const { customization } = option
    if (customization === false) {
        fs.copySync(
            themeSrc, 
            path.resolve(process.cwd(), option.output),
            {
                filters(filePath) {
                    return !/\.ejs$/.test(filePath)
                }
            }
        )
    }
    return option
}

module.exports = copy