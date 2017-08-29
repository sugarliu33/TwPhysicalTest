// 实现一个left-pad函数
// leftpad功能，就是字符串前面拼指定字符到固定长度，比如
// leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
// 三个参数，
// 第一个：当前字符串；
// 第二个：需要返回字符串的长度
// 第三个：用来拼接的字符串
//
// 有趣的pad-left: https://github.com/shengxinjing/my_blog/issues/10

function leftPad(str, len, ch) {
    let chLen = ch.length;
    let a = "";
    let tlen = len -str.length;
    if (tlen % chLen !== 0){
        a = str.slice(0,(str.length - (tlen % chLen)));
        len =  len - a.length;
        return Array(parseInt(len / chLen)+1).join(ch) + a;
    }else {
        return Array(parseInt(tlen / chLen) + 1).join(ch) + str;

    }
}

var temp = leftPad('hello', 10, 'ab');
console.log('leftPad(\'hello\', 10, \'ab\')');
console.log(temp);

var kk = leftPad('hello', 14, 'abc');
console.log("leftPad('hello', 14, 'abc')");
console.log(kk);

var tem = leftPad('hello', 20, '1');
console.log("leftPad('hello', 20, '1')");
console.log(tem);
