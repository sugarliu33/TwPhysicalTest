// 计算两个数组的交数组
// 注意：理解题意（不是找出在两数组中都存在的元素）
// 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].

function intersaction(arr1, arr2) {
    return arr1.filter((element,index) => {
        let flag = arr2.find(n => n === element);
        //console.log(flag);
        if (flag) {
            delete arr2[arr2.indexOf(element)];
            return element;
        }
    });
}

var arr1 = [1, 2, 2, 1];
var arr2 = [2, 2];
console.log(arr1);
console.log(arr2);
console.log(intersaction(arr1, arr2));

var arrX = [1, 2, 3, 4,5,6,7,8,9];
var arrY = [1,2,3,4,0,0,6,7,8,9];
console.log(arrX);
console.log(arrY);
console.log(intersaction(arrX, arrY));