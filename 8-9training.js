function fibonacci(n){
    if (n === 1){
        return 0;
    }else if (n === 2 ){
        return 1;
    }else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
var n = 5;
console.log("fibonacci数列中第"+n+"个数是多少？"+'\n');
console.log(fibonacci(n));