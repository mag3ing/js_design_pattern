/**
 * Created by mag on 16-3-2.
 */
    /*
    *内部迭代器
    * @param ary 需循环输出的数组
    * @param callback 循环中每一步将要执行的回调函数
    * */
console.log('=======  内部迭代器 begin  ======');
var each = function(ary,callback) {
    for(var i = 0, l = ary.length; i < l; i++) {
        if(callback.call(ary[i], i, ary[i])) return true; //把下标和元素当作参数传给callback函数
    }
}
each([1, 2, 3, 4], function(i, n) {
    console.dir([i, n]);
});
console.log('=======  内部迭代器 end  ======\n\r');
console.log('\n\r');
console.log('\n\r');
/*
* 使用内部迭代器来比较两数组是否相等
* @param arry1 第一个传入的比较数组
* @param arry2 第二个传入的比较数组
* */
console.log('=======  内部迭代器比较两数组是否相等 begin  ======');
var compare = function(arry1, arry2) {
    if(arry1.length !== arry2.length) {
        console.log('两个数组长度不相等');
        return true;
    }
   var isSave= each(arry1, function(i, n) {
        if(n !== arry2[i]) {
            console.log('两个数组的值不相等');
            return true;
        }
    });
    if(isSave) return;
    console.log('两个数组相等');
}
compare([1,2,3,4], [1,2,3]);
compare([1,2,3,4], [1,2,3,5]);

console.log('=======  内部迭代器比较两数组是否相等 end  ======\n\r');
console.log('\n\r');
console.log('\n\r');


console.log('=======  外部迭代器 begin  ======');
var Iterator = function(obj) {
    var current = 0;

    var next = function() {
        current += 1;
    };

    var isDone = function() {
        return current >= obj.length;
    };

    var getCurrItem = function() {
        return obj[current];
    };

    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem
    }
};
console.dir(Iterator);
console.log('=======  外部迭代器 end  ======\n\r');
console.log('\n\r');
console.log('\n\r');


console.log('=======  外部迭代器比较两数组是否相等 begin  ======');
var compareNew = function(iterator1, iterator2) {
    while(!iterator1.isDone() && !iterator2.isDone()) {
        if(iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            console.log('两数组不相等');
            return;
        }
        iterator1.next();
        iterator2.next();
    }
    console.log('两数组相等');
}
var iterator1 = Iterator([1,2,3]);
var iterator2 = Iterator([1,2,3]);
compareNew(iterator1, iterator2);
console.log('=======  外部迭代器比较两数组是否相等 end  ======\n\r');
