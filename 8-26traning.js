// 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
// 如果这个数被3整除，打印fizz.
//     如果这个数被5整除，打印buzz.
//     如果这个数能同时被3和5整除，打印fizz buzz.
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        var ans = "";
        if (i % 3 === 0) {
            ans = 'fizz';
            if (i % 5 === 0){
                ans += ' buzz';
            }
        }else if (i % 5 === 0) {
            ans = 'buzz';
        }
        console.log(ans);
    }
    // return ans;
}

console.log(15);
// console.log(fizzBuzz(15));
fizzBuzz(15);
// console.log(20);
// console.log(fizzBuzz(20));
// console.log(9);
// console.log(fizzBuzz(9));