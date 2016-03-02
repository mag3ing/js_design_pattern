/**
 * Created by mag on 16-2-11.
 */
'use strict'
Function.prototype.uncurrying  = function () {
    let self = this;
    return function() {
        let obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    };
};

let push = Array.prototype.push.uncurrying();

(function() {
    push(arguments, 5);
    console.log('push length: ' + push.length);
    console.log(arguments.length)
    console.log(arguments);
})(1,2,3,4);

let a = [
    'mag',
    'hello',
    'luck',
    'node'
];
let a2 = a.map(s=>s.length);
console.log(a2);

let log = ['mag','hello'];
console.log(log[log.length-1])
var obj = {
    get last() {
        if(log.length == 0) {
            return undefined;
        }
        return log[log.length - 1];
    }
}
console.log(obj.last);


let set = new Set(['red', 'blue', 'green']);
for(let item of set.entries()) {
    console.log(item)
}