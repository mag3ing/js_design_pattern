/**
 *
 * Created by mag on 16-2-8.
 */
'use strict'
var mult = function() {
    let cache = {};
    let calculate = function () {   //独立的代码块，可以封装成函数
        let a = 1;
        console.log('calculate:' + arguments)
        for(let i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return a;
    };
    return function() {
        console.log('return:' + arguments)
        let args = Array.prototype.join.call(arguments, ',');
        if(args in cache) {
            console.log('cache run')
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
};

console.log(mult()(2,3,4));
console.log(mult()(2,3,5));
console.log(mult()(2,3,4));