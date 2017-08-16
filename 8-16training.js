function findRepeatElement(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
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