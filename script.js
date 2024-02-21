function main_table(){
    var ele = document.createElement("table")
    ele.setAttribute("Class","table");
    return ele;
}
function main_thead(){
    var ele = document.createElement("thead")
    return ele;
}
function main_tbody(){
    var ele = document.createElement("tbody")
    return ele;
}
function main_thead_tr(){
    var ele = document.createElement("tr")
    return ele
}
function main_thead_th(attrbname,attrbvalue,content){
    var ele = document.createElement("th")
    ele.setAttribute(attrbname,attrbvalue)
    ele.innerHTML = content
    return ele
}
function usertd(content)
{
    var ele = document.createElement("td")
    ele.innerHTML=content;
    return ele;
}

var mTable = main_table()
var mThead = main_thead()
var mTbody = main_tbody()
var mtr = main_thead_tr();
var mthf = main_thead_th("scope","col","First");
var mthl = main_thead_th("scope","col","Last");

var usertr1 = main_thead_tr("scope","row","1")
var usertdmark =  usertd("Mark")
var usertdotto =  usertd("Otto")

var usertr2 = main_thead_tr("scope","row","2")
var usertdjac =  usertd("Jacob")
var usertthro =  usertd("Thornton")

var usertr3 = main_thead_tr("scope","row","3")
var usertdlr =  usertd("Larry")
var usertbird =  usertd("The Bird")

mTbody.append(usertr1,usertdmark,usertdotto,usertr2,usertdjac,usertthro,usertr3,usertdlr,usertbird)

mtr.append(mthf,mthl);
mThead.append(mtr);
mTable.append(mThead,mTbody);
document.body.append(mTable);
