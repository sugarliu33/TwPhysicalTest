// 题目：找出数组 arr 中重复出现过的元素
// 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’


function findRepeatElement(array) {
    let result = [];
    // arr.forEach(function (item, index) {
    //    if(arr.slice(0,index).includes(item) || arr.slice(index).includes(item)) {
    //        result.push(item);
    //    }
    // });
    for (var i = 0; i < arr.length; i++) {
        let temp = arr[i];
        for (var j = 0; j < i; j++) {
            if (temp === arr[j]) {
                result.push(temp);
                break;
            }
        }
    }
    return result;
}

var arr = ['a','ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(arr);
console.log(findRepeatElement(arr));
var arr1 = ['a', 'b','c','as','bs','b','as','bs'];
console.log(arr1);
console.log(findRepeatElement(arr1));