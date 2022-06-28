const fs = require('fs-extra')
const yaml = require('js-yaml')
const path = require('path')
const escapeTitle = require('../utils/escapeTitle')
const USERCHAPTER = 'chapters.yml'
function chapters (option) {
    // 存在文件加载文件中的chapter
    let userChapter
    try {
        fs.accessSync(path.resolve(process.cwd(), USERCHAPTER), 'utf8')
        userChapter = true
    } catch (e) {
        console.log('chapter didn\'t exit')
        userChapter = false
    }
    let chaptercontent
    let docArray
    if (userChapter) {
        try {
            chaptercontent = fs.readFileSync(path.resolve(process.cwd(), USERCHAPTER), 'utf8')
            docArray = escapeTitle(yaml.safeLoad(chaptercontent, 'utf8'))
            // 将内容转存为option
            option.chapters = docArray
            console.log(docArray)
        } catch (e) {
            console.log(e)
            throw e
        }
        return option
        
    } else {
        // 不存在通过遍历文件夹的方式获取章节
    }
    
    return option
}
module.exports = chapters