// 题目：统计数组 arr 中值等于 item 的元素出现的次数
// 例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
// 要求：不要使用for循环



function countItem(arr,item) {

    var count = arr.reduce(( count, num ) => num == item ? count + 1 : count, 0);
    console.log(count);
}
var arr = [1, 3, 7, 1 ,4,5,8,9,1,1,1,1];
console.log(arr);
countItem(arr,1);