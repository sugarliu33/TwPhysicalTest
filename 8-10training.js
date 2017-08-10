/**
 * 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
 * eg: function findNum(arr){ ... }
 */
function findNum (arr) {
    var ans = 0;
    let singlearr = new Set(arr);
    var newArr = [];
    for (let item of Array.from(singlearr)) {
        newArr.push({num:item,count:0});
    }
    for (let item of arr) {
        for (let obj of newArr) {
            if(obj.num === item){
                obj.count++;
            }
        }
    }
    for (let obj of newArr) {
        if (obj.count === 1){
            ans = obj.num;
        }
    }
     return ans;
}
var arr = [2,2,1,1,4,3,3];
console.log("返回数组中只出现一次的数字：")
console.log(findNum(arr));
module.exports = findNum;