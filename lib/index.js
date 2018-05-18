

function aldoc(option) {
    log.success('[begin] build docs')
    option = config(option)
    option = chapters(option)
    option = theme(option)
    option = copy(option)
    page(option)
    log.success('[end] build docs')
    return option
}

module.exports = aldoc