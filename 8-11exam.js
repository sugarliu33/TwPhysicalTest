// 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
// function XXX(str,val){}

function removeNode(str,val) {
    var arr = str.split('->');
    var newStr = [];
    for (let i = 0; i < arr.length; i++){
        if(val != arr[i]){
            newStr.push(arr[i]);
        }
    }
     printStr(newStr);
}
function printStr(str) {
    var printStr = "";
    for (let i = 0; i < str.length -1; i++) {
        printStr += str[i] + '->'
    }
    console.log(printStr + str[str.length-1]) ;
}


var link = "1->2->3->3->4->5->3";
var link1 = "1->9->8->0->9->7"
removeNode(link,3);
removeNode(link1,9);