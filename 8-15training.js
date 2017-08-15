function countItem(arr,item) {
    var i = 0;
    var count = 0;
    while ( i < arr.length ){
        if (arr[i] == item){
            count++;
        }
        i++;
    }
    console.log(count);
}
var arr = [1, 3, 7, 1 ,4,5,8,9,1,1,1,1];
console.log(arr);
countItem(arr,1);