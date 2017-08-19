// 数组去重
// 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
function deleteRepeate(arr) {
    var A = new Set(arr);
    return Array.from(A);
}
var arr = ['s', 's', 's', 'b', 'a',1,'1',1];
console.log(deleteRepeate(arr));