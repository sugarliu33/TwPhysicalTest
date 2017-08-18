// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
// 要求：不要使用for，while循环

function findEqualItemIndex(arr, item) {
    var result = [];
    arr.forEach(function (x, index) {
       if (x === item){
           result.push(index);
       }
    });

    return result;
}
var arr = [1,3,7,1,4];
console.log(arr);
console.log(findEqualItemIndex(arr, 1));
var arr1 = [1,2,3,4,5,6,7,8,6,5,4];
console.log(arr1);
console.log(findEqualItemIndex(arr1, 5));