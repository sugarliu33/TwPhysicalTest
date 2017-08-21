// 判断一个字符串中出现次数最多的字符，并统计次数
// 例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
// 例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}


function countItem(str) {
    let temp = {};
    let max = 0;
    let result = {};
    str.split("").forEach(function (e) {
       if (e in temp) {
           temp[e]++;
       }else {
           temp[e] = 1;
       }
    });
    for (var key in temp) {
        if (temp[key] > max){
            max = temp[key];
        }
    }
    for (var key in temp) {
        if (max === temp[key]) {
            result[key] = max;
        }
    }
    console.log(result);
}
var str = 'aaaaabbdbdbb';
console.log(str);
countItem(str);
var str1 = 'abcsbaddbizdbas';
console.log(str1);
countItem(str1);