const db = require("../db")
const pagger = require("../gui/pagging")
const common = require("../gui/common")


module.exports.listProduct = (req,res) => {
    var page = parseInt(req.query.page) || 1
    
    var perPage = 3

    var start = (page - 1) * perPage
    // const drop = (page -1) * perPage
    var end = page * perPage

    var size = db.get('products').size().value()

    var maxPage = size/perPage + (size%perPage!==0?1:0)
    console.log(size)
    const gap = 2

    var st=pagger.generate(page,maxPage,gap)
    console.log(st);
    res.render('products',{
        products:db.get('products').value().slice(start,end),
        page:st
    })
}