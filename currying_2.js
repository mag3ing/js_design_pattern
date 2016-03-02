/**
 * Created by mag on 16-2-9.
 */
'use strict'
let currying = function(fn) {
    let args = [];
    return function() {
        if(args.length === 0) {
            return fn.apply(this, args);
        }else{
            [].push.apply(args, arguments);
            //return arguments.callee;
        }
    }
};

var cost = (function() {
    let money = 0;
    return function() {
        for(let i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();

var cost = currying(cost);
cost(100);
cost(200);
cost(300);
console.log(cost());

//let o = {
//    p: 1,
//    p: 2
//}
//console.log(o.p)