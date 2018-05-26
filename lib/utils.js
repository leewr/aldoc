/*
    创建目录
*/
const createChapterList = require('../utils/createChapterList')
exports.createChapterList = createChapterList

function createPage(root, optionObj) {
    optionObj = createChapterList(root, optionObj)
}
module.exports = createPage