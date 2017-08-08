function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if ( n % i == 0){
            return false;
        }
    }
    return true;
}
function sortNum(a,b) {
    return a - b;
}
function decomposeNum(num) {
    var n = num;
    var ans = [];
    while ( n > 1 ){
        for (var i = 2; i <= n; i++){
            if(isPrime(i) && n % i == 0) {
                ans.push(i);
                n /= i;
            }
        }
    }
    ans.sort(sortNum());
    print(num,ans);
}
function print(num,ans) {
    var str = num +'=';
    for (let item of ans) {
        str += item;
    }
    console.log(str);
}
decomposeNum(90);