module.exports.generateHyperlink = (url,lable) => {
    return "<li class=\"page-item\"><a class=\"page-link\" href="+url+">"+lable+"</a></li>";
}

module.exports.generateTextbase = (text) => {
    return "<li class=\"page-item active\"><a class=\"page-link\" href=\"#\">"+text+"</a></li>";
}