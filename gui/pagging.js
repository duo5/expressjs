const common = require("./common")

module.exports.generate = (page,maxPage,gap) => {
    var result = "";
    if(page - gap > 1){
        result+=common.generateHyperlink("?page=1","First");
    }
    for(let i = page - gap; i < page;i++){
        if(i>0){
            result+=common.generateHyperlink("?page="+i,""+i);
        }
            
    }
    result+=common.generateTextbase(""+page);
    for(let i = page+1;i<= page+gap;i++){
        if(i<=maxPage){
            result+=common.generateHyperlink("?page="+i,""+i);
        }
    }
    if(maxPage - gap > page){
        result+=common.generateHyperlink("?page="+maxPage,"Last");
    }
    return result;
}