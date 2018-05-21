const fs = require('fs-extra')
const path = require('path')
const walkSync = require('walk-sync')
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

function page(option) {
    // 重点流畅跑通生成静态文件
    // 遍历chapters 获取md文件，调用templat模板，生成index文件
    console.log(option)
    const docPath = path.resolve(process.cwd(), option.dir)
    const outputPath = path.resolve(process.cwd(), option.output)
    console.log(docPath)
    option.chapters.forEach(item => {
        // 解析标题
        for (let i in  item) {
            console.log(i)
            let key = i
            let titleArray = key.split('/')
            if (titleArray.length <= 1) {
                // 读取文件
                const content = fs.readFileSync(path.resolve(docPath, key), 'utf8')
                console.log(content)
                let htmlStr = md.render(content)
                let html = option.templates.index({title: htmlStr})
                console.log(html)
                // 输出文件
                // 输出文件地址
                fs.outputFileSync(outputPath + '/index.html', html)
            }
        }
        
    })
}
module.exports = page