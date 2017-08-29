// 将数组中所包含的某个元素找出，并放在数组后面
// 给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
//
//     function XXX(arr,elem){ }
//
// 参数：
// arr:数组
// elem:某个元素

function moveElement(arr, elem) {
    let ans = [];
    let temp = arr.filter(item => {
       if(item !== elem){
           return item;
       }else {
           ans.push(item);
       }
    });
    ans.forEach(i =>{
        temp.push(i);
    });
    return temp;
}

var nums = [0, 1, 0, 3, 12];
var target = 0;
console.log("nums = [0, 1, 0, 3, 12],target = 0");
console.log(moveElement(nums, target));