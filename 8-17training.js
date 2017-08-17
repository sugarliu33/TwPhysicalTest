function DoubleItem(arr) {
    return arr.map((function (x) {
        return x * x ;
    }));
}

arr = [5, 3, 7, 1];
console.log(arr)
console.log(DoubleItem(arr));