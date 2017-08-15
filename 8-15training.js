function countItem(arr,item) {

    var count = arr.reduce(( count, num ) => num == item ? count + 1 : count, 0);
    console.log(count);
}
var arr = [1, 3, 7, 1 ,4,5,8,9,1,1,1,1];
console.log(arr);
countItem(arr,1);